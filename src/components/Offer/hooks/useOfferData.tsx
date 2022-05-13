import { select } from "../../../store/selector";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import {
    CheckImei,
    GetQuestions,
    giveAnswer,
    setStep,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    setCombinationsId,
    getOfferData,
} from "../../../store/offerSlice";
import {
    GivenAnswer,
    OfferSteps,
    Question,
    QuestionTree,
} from "../../../store/offerSlice/types";

// 350320523229662

export const useOfferData = () => {

    const selectOfferData = useMemo(() => getOfferData, [])
    const offer = useSelector(selectOfferData)
    
    const dispatch = useDispatch();

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step));
    };

    const getQuestions = useCallback(() => {
        dispatch(GetQuestions.request());
    }, []);

    const getNextQuestion = () : Question | null => {
        const { questionsTree, currentGivenAnswers, questionsData } = offer;
        const givenAnswers = currentGivenAnswers.answers.map(el => el.questionId);
        const nextQuestion = questionsTree?.questions.find(el => !givenAnswers.includes(el.questionId));
        if (!nextQuestion || !questionsTree || !questionsData) { 
            getQuestions();
            return null
        }

        const questionId = nextQuestion.questionId;
        const question = questionsData[+questionId];

        return question;
    };

    const getQuestion = (_questionsTree?: QuestionTree): Question | null => {
        const { questionsData, currentGivenAnswers } = offer;

        const questionsTree = _questionsTree || offer.questionsTree;

        const { answers } = currentGivenAnswers;
        let currentQuestion: Question | null = null;

        if (!questionsTree || !questionsData) {
            getQuestions();
            return null;
        }

        if (questionsTree.combinationId) {
            dispatch(setCombinationsId(questionsTree.combinationId));
        }

        const lastGivenAnswer = answers[answers.length - 1];

        if (!lastGivenAnswer) {
            currentQuestion =
                questionsData[+questionsTree.questions?.[0]?.questionId] || null;
            if (!currentQuestion) {
                getQuestions();
                return null;
            }

            return currentQuestion;
        }


        const lastAnswerId = lastGivenAnswer.answerId;
        const lastQuestionId = lastGivenAnswer.questionId;

        if (!lastAnswerId) {
            getQuestions();
            return null;
        }

        const question = questionsTree.questions.find(
            (el) => el.questionId === lastQuestionId
        );

        if (!question?.answers) {
            getQuestions();
            return null;
        }

        if (question.answers.length === 0) {
            return getNextQuestion();
        }

        const newTree = question?.answers.find(
            (el) => el.answerId === lastAnswerId
        );

        return getQuestion(newTree);
    };

    const _giveAnswer = (answer: GivenAnswer, combinationId?: string) => {
        dispatch(giveAnswer(answer));
        combinationId && dispatch(setCombinationsId(combinationId));
    };

    const _restoreOffer = () => {
        dispatch(restoreOffer());
    };

    const setPhoto = (type: "front" | "back", imageURL: string) => {
        dispatch(
            type === "front" ? setPhotoFront(imageURL) : setPhotoBack(imageURL)
        );
    };

    const checkImei = (emai: string) => dispatch(CheckImei.request(emai));

    const progress = 0;

    return {
        ...offer,
        checkImei,
        changeStep,
        giveAnswer: _giveAnswer,
        restoreOffer: _restoreOffer,
        getQuestions,
        progress,
        setPhoto,
        getQuestion,
    };
};
