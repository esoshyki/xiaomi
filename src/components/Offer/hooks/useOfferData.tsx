import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState, useMemo } from "react";
import {
    GetQuestions,
    giveAnswer,
    setStep,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    setCombinationsId,
    getOfferData,
    setOfferId,
} from "../../../store/offerSlice";
import {
    GivenAnswer,
    OfferSteps,
    QuestionTree,
    Question
} from "../../../store/offerSlice/types";
import { getTree } from "../helpers/getTree";
import { getFromTree } from "../helpers/getFromTree";

// 350320523229662

export const useOfferData = () => {
    const offer = useSelector(getOfferData);

    const progress = useMemo(() => {
        if (offer.questionsData) {
            return offer.questionsReceived
                ? (offer.givenAnswers.answers.length * 0.5) /
                      offer.questionsReceived
                : 0;
        } else {
            return 0;
        }
    }, [offer]);

    const dispatch = useDispatch();

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step));
    };

    const getQuestions = useCallback(() => {
        if (!offer.loading) {
            dispatch(GetQuestions.request());
        }
    }, []);

    const getQuestion = () => {
        const { questionsTree, currentGivenAnswers, questionsData } = offer;
        const { answers } = currentGivenAnswers;

        if (!questionsTree || !questionsData) {
            return null;
        }

        if (!answers.length) {
            const id = questionsTree.questions[0].questionId;
            return { ...questionsData[id], questionKey: id };
        }

        const treeData = getFromTree(questionsTree, answers);

        if (!treeData?.questionId) {
            return null;
        } else {
            const { questionId, combinationId, offerId } = treeData;
            if (combinationId) {
                dispatch(setCombinationsId(combinationId));
            }

            if (offerId) {
                dispatch(setOfferId(offerId));
            }

            return {
                ...questionsData[questionId],
                questionKey: questionId,
            }
        }
    };

    const _giveAnswer = (answer: GivenAnswer) => {
        dispatch(giveAnswer(answer));
    };

    const _restoreOffer = () => {
        dispatch(restoreOffer());
    };

    const setPhoto = (type: "front" | "back", imageURL: string) => {
        dispatch(
            type === "front" ? setPhotoFront(imageURL) : setPhotoBack(imageURL)
        );
    };

    return {
        ...offer,
        changeStep,
        giveAnswer: _giveAnswer,
        restoreOffer: _restoreOffer,
        getQuestions,
        progress,
        setPhoto,
        getQuestion,
    };
};
