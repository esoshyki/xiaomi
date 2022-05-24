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
    getQuestionTree,
    getQuestionData,
    getGivenAnswers,
    getOfferStep,
    getAdditionAction,
    getQuestionsPending,
    setAdditionalAction,
    setGetQuestionLoading,
} from "../store/offerSlice";
import {
    GivenAnswer,
    ImageFile,
    OfferSteps,
    SetTreeDataProps,
} from "../store/offerSlice/types";
import { getFromTree } from "../components/Offer/helpers/getFromTree";
import { getOrderPending, getOrderData, getOrderErrors, getCurrentItem, getSendPhotoStatus } from "../store/orderSlice";
import { useUploadFiles } from "../contexts/uploadFiles";

export const useOfferData = (isOrder?: true) => {
    const offer = useSelector(getOfferData);
    const questionsTree = useSelector(getQuestionTree);
    const questionsData = useSelector(getQuestionData);
    const givenAnswers = useSelector(getGivenAnswers);
    const step = useSelector(getOfferStep);
    const _getQuestionsResult = useSelector(getQuestionsResult);
    const changeContent = useSelector(getChangeContent);
    const orderLoading = useSelector(getOrderPending);
    const additionalAction = useSelector(getAdditionAction);
    const getQuestionsLoading = useSelector(getQuestionsPending);
    const orderErrors = useSelector(getOrderErrors);
    const currentItem = useSelector(getCurrentItem);
    const sendPhotoStatus = useSelector(getSendPhotoStatus);


    const dispatch = useDispatch();
    const { files } = useUploadFiles();

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step));
    };

    const isLoading = useMemo(
        () =>
        orderLoading || getQuestionsLoading,
        [getQuestionsLoading, orderLoading]
    );

    const getQuestion = (_isOrder?: true) => {

        if (isOrder && !_isOrder) {
            return null
        }

        if (_getQuestionsResult === "error") {
            return null;
        }

        if (!questionsTree) {
            fetchQuestions()
            return null;
        }

        if (isLoading ) {
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
        const { combinationId, offerId, } = props;
        if (!Object.values(props).filter((el) => !!el).length) return;
        if (combinationId && combinationId !== givenAnswers.combinationId) {
            dispatch(setTreeProps({ combinationId }));
        }
        if (offerId && offerId !== givenAnswers.offerId) {
            dispatch(setTreeProps({ offerId }));
        }
        if (
            props.additionalAction &&
            props.additionalAction !== additionalAction
        ) {
            if (props.additionalAction === "addPhoto" && sendPhotoStatus === "success") {
                return;
            }
            dispatch(setAdditionalAction(props.additionalAction));
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
        console.log(`getQuestionsLoading`, getQuestionsLoading);
        if (additionalAction) {
            dispatch(resetAdditionActions());
            dispatch(
                makeAdditionAction({
                    action: additionalAction,
                    images: files,
                })
            );
            return;
        }
        if (!getQuestionsLoading) {
            dispatch(GetQuestions.request());
        }
    };

    const question = useMemo(getQuestion, [
        givenAnswers,
        questionsData,
        _getQuestionsResult,
        isLoading,
        currentItem,
        sendPhotoStatus
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
        if (isOrder) return;
        if (step !== "questions" || _getQuestionsResult === "error" || isLoading) return;
        if (
            !question &&
            !getQuestionsLoading &&
            !orderLoading &&
            !orderErrors.length
        ) {
            fetchQuestions();
        }
    }, [
        question,
        getQuestionsLoading,
        orderLoading,
        _getQuestionsResult,
        isOrder
    ]);

    useEffect(() => {
        if (step === "start" && !isOrder) {
            fetchQuestions();
        }
    }, [step, isOrder, getQuestionsLoading]);

    useEffect(() => {
        if (isOrder && step !== "questions" && step !== "summary") {
            changeStep("questions")
        }
    }, [isOrder, step]);

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
        getQuestion,
        uploadImage: _uploadImage,
        changeContent,
    };
};
