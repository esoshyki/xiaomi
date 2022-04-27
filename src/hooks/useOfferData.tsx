import { select } from "../store/selector";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect } from "react";
import {
    CheckImei,
    GetQuestions,
    setCurrentQuestion,
    setCurrentQuestionGroup,
    giveAnswer,
    setImeiValue,
    setStep,
} from "../store/offerSlice";
import { GivenAnswer, OfferSteps } from "../store/offerSlice/types";

export const useOfferData = () => {
    const offer = useSelector(select.offer);
    const dispatch = useDispatch();

    const setImei = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setImeiValue(e.target.value));
    };

    const getQuestions = (phoneID: string) => {
        dispatch(GetQuestions.request(phoneID));
    };

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step));
    };

    const nextQuestion = () => {
        const { currentQuestion, currentQuestionGroup, questions } = offer;
        if (
            typeof currentQuestion !== "number" ||
            typeof currentQuestionGroup !== "number" ||
            !questions
        ) return;

        const currentGroup = questions[currentQuestionGroup];

        if (!currentGroup) {
            changeStep(OfferSteps.summary)
        }

        if (currentGroup.questions[currentQuestion + 1]) {
            return dispatch(setCurrentQuestion(currentQuestion + 1));
        } else {
            if (questions[currentQuestionGroup + 1]) {
                dispatch(
                    setCurrentQuestionGroup(currentQuestionGroup + 1)
                );
            } else {
                changeStep(OfferSteps.summary)
            }   
        }
    };

    useEffect(() => {
        const shouldDisplay = (
            displayConditionQuestion?: string,
            displayConditionAnswers?: string[]
        ) => {
            if (!displayConditionQuestion || !displayConditionAnswers) return true;
            if (displayConditionAnswers && displayConditionQuestion) {
                return Object.values(offer.givenAnswers).some((questions) =>
                    questions.some(
                        (question) =>
                            question.questionId === displayConditionQuestion &&
                            displayConditionAnswers.includes(question.answerId)
                    )
                );
            }
        };

        const { questions, currentQuestion, currentQuestionGroup } = offer;
        if (currentQuestionGroup && currentQuestion) {
            if (questions) {
                const question = questions[currentQuestionGroup].questions[currentQuestion];
                const { displayConditionAnswers, displayConditionQuestion } = question

                if (!shouldDisplay(displayConditionQuestion, displayConditionAnswers)) {
                    nextQuestion()
                }
            }
        }
    }, [offer.currentQuestion, nextQuestion, offer])

      const _giveAnswer = (groupId: number, answer: GivenAnswer) => {
        dispatch(
            giveAnswer({
                answer,
                groupId,
            })
        );
        nextQuestion();
    };

    const checkImei = (emai: string) => dispatch(CheckImei.request(emai));

    const progress =
        (Object.values(offer.givenAnswers).reduce(
            (acc, next) => acc + next.length,
            0
        ) || 0) /
        (offer.questions?.reduce(
            (acc, next) => acc + next.questions.length,
            0
        ) || 1);

    return {
        ...offer,
        setImei,
        checkImei,
        getQuestions,
        changeStep,
        nextQuestion,
        giveAnswer: _giveAnswer,
        progress,
    };
};
