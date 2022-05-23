import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback } from "react";
import {
    GetQuestions,
    giveAnswer,
    setStep,
    restoreOffer,
    getOfferData,
    setTreeProps,
    makeAdditionAction,
    resetAdditionActions,
    uploadImage,
    giveAnswerRequest,
    getChangeContent,
} from "../../../store/offerSlice";
import {
    GivenAnswer,
    ImageFile,
    OfferSteps,
    SetTreeDataProps,
} from "../../../store/offerSlice/types";
import { getFromTree } from "../helpers/getFromTree";
import { getOrderData } from "../../../store/orderSlice";
import { useUploadFiles } from "../../../contexts/uploadFiles";

// 350320523229662

export const useOfferData = () => {
    const offer = useSelector(getOfferData);
    const order = useSelector(getOrderData);
    const {
        givenAnswers,
        step,
        getQuestions,
        createOrder,
        questionsData,
    } = offer;

    const changeContent = useSelector(getChangeContent)

    const dispatch = useDispatch();
    const { files } = useUploadFiles()

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
            dispatch(makeAdditionAction({
                action: additionalAction,
                images: files
            }));
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
    }, [question]);

    /** |||||||||||||||||||||||||||||||||||||||
     *     EFFECTS
     *  |||||||||||||||||||||||||||||||||||||||
     */

    const _uploadImage = (image: ImageFile) => {
        dispatch(uploadImage(image))
    }

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
        setStep: _setStep,
        isLoading,
        uploadImage: _uploadImage,
        changeContent
    };
};
