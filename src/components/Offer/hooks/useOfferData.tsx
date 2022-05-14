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
} from "../../../store/offerSlice/types";
import { getTree } from "../helpers/getTree";

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

        let tree: QuestionTree = questionsTree;

        if (!answers.length) {
            const id = questionsTree.questions[0].questionId;
            return { ...questionsData[id], questionKey: id };
        }

        answers.forEach((answer) => {
            const { questionId, answerId } = answer;

            if (!answerId) {
                return;
            }

            tree = getTree(tree, questionId, answerId) || tree;
        });

        if (tree.combinationId) {
            dispatch(setCombinationsId(tree.combinationId));
        }

        if (tree.offerId) {
            dispatch(setOfferId(tree.offerId));
        }

        const question = tree.questions.find(
            (q) =>
                !(
                    answers
                        .map((el) => el.questionKey)
                        .includes(q.questionId) ||
                    answers.map((el) => el.questionId).includes(q.questionId)
                )
        );

        if (!question) {
            return null;
        }

        const key = Object.keys(questionsData).find(
            (key) => questionsData[key].questionId === question.questionId
        );

        if (!key) {
            return null;
        }

        return {
            ...questionsData[key],
            questionKey: key,
        };
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
