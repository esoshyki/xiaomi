import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
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
import { N } from "../../../store/types";
import { getTree } from "../helpers/getTree";

// 350320523229662

export const useOfferData = () => {
    const offer = useSelector(getOfferData);

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
        const { questionsTree, givenAnswers, questionsData } = offer;
        const { answers } = givenAnswers;

        if (!questionsTree || !questionsData) {
            return null;
        }

        let tree: QuestionTree = questionsTree;

        answers.forEach((answer) => {
            const { questionId, answerId } = answer;

            if (!answerId) {
                return;
            }

            tree = getTree(tree, questionId, answerId) || tree;
        });

        if (tree.combinationId) {
            dispatch(setCombinationsId(tree.combinationId))
        }

        if (tree.offerId) {
            dispatch(setOfferId(tree.offerId))
        }

        const question = tree.questions.find(
            (q) => !answers.map((el) => el.questionId).includes(q.questionId)
        );

        if (!question) {
            return null;
        }

        return questionsData[+question.questionId];
    };

    const _giveAnswer = (answer: GivenAnswer ) => {
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

    const progress = 0;

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
