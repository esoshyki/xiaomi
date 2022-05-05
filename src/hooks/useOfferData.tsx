import { select } from "../store/selector";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useCallback, useEffect } from "react";
import {
    CheckImei,
    GetQuestions,
    giveAnswer,
    setStep,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    setCombinationsId,
} from "../store/offerSlice";
import { OfferSteps, Question, QuestionTree } from "../store/offerSlice/types";
import { N } from "../store/types";

export const useOfferData = () => {
    const offer = useSelector(select.offer);
    const dispatch = useDispatch();

    const setImei = (e: ChangeEvent<HTMLInputElement>) => {

    };


    const changeStep = useCallback((step: OfferSteps) => {
        dispatch(setStep(step));
    }, [dispatch]);

    const nextQuestion = useCallback(() => {

    }, [offer, changeStep, dispatch]);

    useEffect(() => {

    }, [offer, nextQuestion]);

    const getTree = (questionId: number, answerId: number, root?: QuestionTree): QuestionTree | null => {

        if (root) {
            const { questions } = root;
            const newAnswers = questions[questionId]?.answers;
            if (!newAnswers) return null;
            const newTree = newAnswers[answerId];
            return Array.isArray(newTree) ? null : newTree;
        }

        return null
    }

    const getQuestion = (): Question & { questionId: number } | null => {
        const { questionsData, questionsTree, answers, loading, errors } = offer;

        if (errors.length > 0) return null;

        if (loading) return null;

        if (!questionsData || !questionsTree) return null

        if (!answers) {
            const idx = Object.keys(questionsTree.questions)[0];
            if (idx) {
                const question = questionsData[+idx];
                if (question) {
                    return { ...question, questionId: +idx }
                }
                return null
            } else {
                dispatch(GetQuestions.request());
                return null
            }
        } else {
            let tree: QuestionTree | null = questionsTree;
            Object.entries(answers).forEach(([questionId, answerId]) => {
                if (+questionId) {
                    const newTree = getTree(+questionId, +answerId, questionsTree);
                    if (newTree) {
                        tree = newTree
                    }
                }
            });

            if (tree) {
                if (Object.keys(tree.questions).every(el => Object.keys(answers).includes(el))) {
                    dispatch(GetQuestions.request());
                    return null;
                }
                if (tree.combinationId && answers.combinationId !== tree.combinationId) {
                    dispatch(setCombinationsId(tree.combinationId));
                }
                const key = Object.keys(tree.questions).filter(key => !Object.keys(answers).includes(key))[0];
                if (key) {
                    return { ...questionsData[+key], questionId: +key }
                } else {
                    dispatch(GetQuestions.request())
                    return null;
                }
            } else {
                return null
            }

        }

        return null
    }

    const _giveAnswer = (questionId: number, answer: number | string) => {
        dispatch(
            giveAnswer({
                answer,
                questionId,
            })
        );
        nextQuestion();
    };

    const _restoreOffer = () => {
        dispatch(restoreOffer())
    };

    const setPhoto = (type: "front" | "back", imageURL: string) => {
        dispatch(type === "front" ? setPhotoFront(imageURL) : setPhotoBack(imageURL))
    }

    const checkImei = (emai: string) => dispatch(CheckImei.request(emai));

    const progress = 1;

    return {
        ...offer,
        setImei,
        checkImei,
        changeStep,
        nextQuestion,
        giveAnswer: _giveAnswer,
        restoreOffer: _restoreOffer,
        progress,
        setPhoto,
        getQuestion
    };
};
