import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback } from "react";
import {
    GetQuestions,
    giveAnswer,
    setStep,
    restoreOffer,
    setPhotoFront,
    setPhotoBack,
    getOfferData,
    setTreeProps,
    makeAdditionAction,
    resetAdditionActions,
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
    const {
        givenAnswers,
        step,
        getQuestions,
        createOrder,
        questionsData,
        order,
    } = offer;

    const dispatch = useDispatch();

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step));
    };

    const isLoading = useMemo(
        () => order.loading || getQuestions.loading || createOrder.loading,
        [getQuestions, createOrder, order]
    );

    const getQuestion = () => {
        const {
            questionsTree,
            givenAnswers,
            questionsData,
            getQuestions,
            createOrder,
        } = offer;
        if (getQuestions.loading || createOrder.loading) {
            return null;
        }
        const { answers } = givenAnswers;

        if (!questionsTree || !questionsData) return null;

        const question = getFromTree(questionsTree, answers, _setTreeProps);

        if (!question) return null;
        const { questionId } = question;

        const found = Object.entries(questionsData).find(([key, val]) => {
            return key === questionId || val.questionId === questionId;
        });

        if (!found) return null;

        const [questionKey, _question] = found;

        return {
            ..._question,
            questionKey,
        };
    };

    const _setTreeProps = (props: SetTreeDataProps) => {
        const { combinationId, offerId, additionalAction } = props;
        const { givenAnswers } = offer;
        if (!Object.values(props).filter((el) => !!el).length) return;
        if (combinationId && combinationId !== givenAnswers.combinationId) {
            dispatch(setTreeProps({ combinationId }));
        }
        if (offerId && offerId !== givenAnswers.offerId) {
            dispatch(setTreeProps({ offerId }));
        }
        if (
            additionalAction &&
            additionalAction !== givenAnswers.additionalAction
        ) {
            dispatch(setTreeProps({ additionalAction }));
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

    const _setStep = (step: OfferSteps) => () => {
        dispatch(setStep(step));
    };

    const fetchQuestions = () => {
        if (offer.givenAnswers.additionalAction) {
            const additionalAction = offer.givenAnswers.additionalAction;
            dispatch(resetAdditionActions());
            dispatch(makeAdditionAction(additionalAction));
            return;
        }
        if (!offer.getQuestions.loading) {
            dispatch(GetQuestions.request());
        }
    };

    const question = useMemo(getQuestion, [givenAnswers, questionsData]);

    const progress = useMemo(() => {
        const questionsCount = questionsData ? Object.keys(questionsData).length : 0;
        if (question && questionsData) {
            if (!questionsCount) return 0;
            return 0.5 * (question.answerOrder || 0) / Object.keys(questionsData).length
        } else {
            return 0
        }
        return Math.random() * 0.5
    }, [question]);

    /** |||||||||||||||||||||||||||||||||||||||
     *     EFFECTS
     *  |||||||||||||||||||||||||||||||||||||||
     */

    useEffect(() => {
        if (step !== "questions") return;
        if (!question && !getQuestions.loading && !createOrder.loading) {
            fetchQuestions();
        }
    }, [question, getQuestions.loading, createOrder.loading]);

    useEffect(() => {
        if (step === "start") {
            fetchQuestions();
        }
    }, []);

    return {
        ...offer,
        question,
        changeStep,
        giveAnswer: useCallback(_giveAnswer, []),
        restoreOffer: _restoreOffer,
        fetchQuestions,
        progress,
        setPhoto,
        setStep: _setStep,
        isLoading
    };
};
