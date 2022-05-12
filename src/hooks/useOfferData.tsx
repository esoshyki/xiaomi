import { select } from "../store/selector";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
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
import { OfferSteps, Question } from "../store/offerSlice/types";

export const useOfferData = () => {
    const offer = useSelector(select.offer);
    const dispatch = useDispatch();

    const changeStep = useCallback((step: OfferSteps) => {
        dispatch(setStep(step));
    }, [dispatch]);

    const getQuestions = () => {
        dispatch(GetQuestions.request())
    }

    const giveNextQuestions = () => {
        getQuestions()
    };

    const getQuestion = (): Question & { questionId: number } | null => {
        const { questionsData, questionsTree, answers, loading, errors, questionsGiven, answersGiven } = offer;

        if (loading) return null;
        if (errors.length > 0) return null;
        if (!questionsTree) return null;
        if (!questionsData) return null;
        console.log(questionsGiven);
        const tree = questionsGiven.length ? questionsGiven.reduce((acc, next) => {
            const obj = acc.questions[+next].answers;
            const idx = Object.keys(obj).find(id => answersGiven.includes(id));
            if (!idx) {
                giveNextQuestions();
                return acc;
            } else {
                const newTree = acc.questions[+next].answers[+idx];
                if (Array.isArray(newTree)) {
                    return acc
                }
                return newTree
            }
        }, {...questionsTree}) : questionsTree;

        console.log(tree.questions);


        if (tree.combinationId && answers?.combinationId !== tree.combinationId) {
            dispatch(setCombinationsId(tree.combinationId));
        };

        if (Object.keys(tree.questions).length === 0) {
            giveNextQuestions();
            return null;
        }
        const key = Object.keys(tree.questions).filter(el => !questionsGiven.includes(el))[0];
        return { ...questionsData[+key], questionId: +key }
    }

    const _giveAnswer = (questionId: number, answer: number | string, combinationId?: string) => {
        dispatch(
            giveAnswer({
                answer,
                questionId,
                combinationId
            })
        );
    };

    const _restoreOffer = () => {
        dispatch(restoreOffer())
    };

    const setPhoto = (type: "front" | "back", imageURL: string) => {
        dispatch(type === "front" ? setPhotoFront(imageURL) : setPhotoBack(imageURL))
    }

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
        getQuestion
    };
};
