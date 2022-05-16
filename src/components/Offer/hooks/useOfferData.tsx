import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import {
    GetQuestions,
    giveAnswer,
    setStep,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    getOfferData,
    setTreeProps,
} from "../../../store/offerSlice";
import {
    GivenAnswer,
    OfferSteps,
    SetTreeDataProps,
} from "../../../store/offerSlice/types";
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

    const fetchQuestions = useCallback(() => {
        if (!offer.getQuestions.loading) {
            dispatch(GetQuestions.request());
        }
    }, []);

    const _setTreeProps = (props: SetTreeDataProps) => {
        const { combinationId, offerId, additionalAction } = props;
        const { givenAnswers } = offer;
        if (!combinationId && !offerId && !additionalAction) return;
        if (
            combinationId !== givenAnswers.combinationId ||
            offerId !== givenAnswers.offerId ||
            additionalAction !== givenAnswers.additionAction
        ) {
            dispatch(setTreeProps(props));
        }
    };

    const getQuestion = () => {
        const { questionsTree, givenAnswers, questionsData } = offer;
        const { answers } = givenAnswers;

        if (!questionsTree || !questionsData) return null;

        const question = getFromTree(questionsTree, answers, _setTreeProps);

        if (!question) return null;
        const { questionId } = question;

        console.log(`questionId`, questionId);

        const found = Object.entries(questionsData).find(([key, val]) => {
            return key === questionId || val.questionId === questionId;
        });

        console.log(`found`, found);

        if (!found) return null;

        const [questionKey, _question] = found;

        return {
            ..._question,
            questionKey,
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
        fetchQuestions,
        progress,
        setPhoto,
        getNextQuestion: getQuestion,
    };
};
