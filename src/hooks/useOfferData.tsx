import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback } from "react";
import {
    GetQuestions,
    setStep,
    restoreOffer,
    getOfferData,
    setTreeProps,
    makeAdditionAction,
    resetAdditionActions,
    uploadImage,
    giveAnswerRequest,
    getChangeContent,
    getQuestionsResult,
} from "../store/offerSlice";
import {
    GivenAnswer,
    ImageFile,
    OfferSteps,
    SetTreeDataProps,
} from "../store/offerSlice/types";
import { getFromTree } from "../components/Offer/helpers/getFromTree";
import { getOrderPending, getOrderData } from "../store/orderSlice";
import { useUploadFiles } from "../contexts/uploadFiles";

export const useOfferData = () => {
    const offer = useSelector(getOfferData);

    const { givenAnswers, step, getQuestions, createOrder, questionsData } =
        offer;

    const _getQuestionsResult = useSelector(getQuestionsResult);

    const changeContent = useSelector(getChangeContent);

    const isCreateOrderPending = useSelector(getOrderPending);

    const dispatch = useDispatch();
    const { files } = useUploadFiles();

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step));
    };

    const isLoading = useMemo(
        () =>
            isCreateOrderPending || getQuestions.loading || createOrder.loading,
        [getQuestions, createOrder, isCreateOrderPending]
    );

    const getQuestion = () => {
        const {
            questionsTree,
            givenAnswers,
            questionsData,
        } = offer;
        if (isLoading ) {
            return null;
        }

        if (_getQuestionsResult === "error") {
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
        dispatch(giveAnswerRequest(answer));
    };

    const _restoreOffer = () => {
        dispatch(restoreOffer());
    };

    const _setStep = (step: OfferSteps) => () => {
        dispatch(setStep(step));
    };

    const fetchQuestions = () => {
        if (offer.givenAnswers.additionalAction) {
            const additionalAction = offer.givenAnswers.additionalAction;
            dispatch(resetAdditionActions());
            dispatch(
                makeAdditionAction({
                    action: additionalAction,
                    images: files,
                })
            );
            return;
        }
        if (!offer.getQuestions.loading) {
            dispatch(GetQuestions.request());
        }
    };

    const question = useMemo(getQuestion, [
        givenAnswers,
        questionsData,
        _getQuestionsResult,
    ]);

    const progress = useMemo(() => {
        const questionsCount = questionsData
            ? Object.keys(questionsData).length
            : 0;
        if (question && questionsData) {
            if (!questionsCount) return 0;
            return (
                (0.5 * (question.answerOrder || 0)) /
                Object.keys(questionsData).length
            );
        } else {
            return 0;
        }
    }, [question]);

    /** |||||||||||||||||||||||||||||||||||||||
     *     EFFECTS
     *  |||||||||||||||||||||||||||||||||||||||
     */

    const _uploadImage = (image: ImageFile) => {
        dispatch(uploadImage(image));
    };

    useEffect(() => {
        if (step !== "questions" || _getQuestionsResult === "error") return;
        if (
            !question &&
            !getQuestions.loading &&
            !createOrder.loading &&
            !createOrder.errors.length
        ) {
            fetchQuestions();
        }
    }, [
        question,
        getQuestions.loading,
        createOrder.loading,
        _getQuestionsResult,
    ]);

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
        setStep: _setStep,
        isLoading,
        uploadImage: _uploadImage,
        changeContent,
    };
};
