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
    setAdditionalAction,
    addNewDevice,
    setQuestionOrder,
} from "../store/offerSlice";
import {
    GivenAnswer,
    ImageFile,
    OfferSteps,
    SetTreeDataProps,
} from "../store/offerSlice/types";
import { getFromTree } from "../components/Offer/helpers/getFromTree";
import { useUploadFiles } from "../contexts/uploadFiles";
import { GetItemStatus, GetOrder } from "../store/orderSlice";

interface UseOfferDataProps {
    orderNumber?: string
    itemNumber?: string
    order?: true
}

export const useOfferData = (props: UseOfferDataProps) => {
    const { orderNumber, itemNumber, order } = props;
    const data = useSelector(getOfferData);

    const { offer, redirectTo, orderData } = data;

    const { questionsTree, questionsData, givenAnswers, step, questionOrder } = offer;
    const _getQuestionsResult = offer.getQuestions.result;
    const changeContent = offer.changeQuestionsContent;
    const additionalAction = offer.givenAnswers.additionalAction;
    const combinationCode = offer.givenAnswers.combinationCode
    const getQuestionsLoading = offer.getQuestions.loading;

    const dispatch = useDispatch();
    const { files } = useUploadFiles();

    const changeStep = useCallback((step: OfferSteps) => {
        dispatch(setStep(step));
    }, []);

    const isLoading = useMemo(
        () => getQuestionsLoading,
        [getQuestionsLoading]
    );

    const getItemStatus = useCallback(() => {
        dispatch(GetItemStatus.request({ orderNumber, itemNumber }));
    }, [orderNumber, itemNumber]);

    const currentItem = useMemo(() => {
        if (orderData) {
            return orderData.items.find(item => item.itemNumber === itemNumber)
        };
    }, [orderData, itemNumber])

    const getQuestion = () => {
        if (order) return null
        if (redirectTo) return null;
        if (orderNumber && !orderData) return null;
        if (isLoading) return null;
        if (_getQuestionsResult === "error") {
            return null;
        }

        if (!questionsTree) {
            fetchQuestions();
            return null;
        }

        const { answers } = givenAnswers;

        if (!questionsTree || !questionsData) return null;

        const _setQuestionOrder = (order: number) => dispatch(setQuestionOrder(order)); 

        const question = getFromTree(questionsTree, answers, _setTreeProps, _setQuestionOrder);

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
        const { combinationId, offerId, combinationCode } = props;
        if (!Object.values(props).filter((el) => !!el).length) return;
        if (combinationId && combinationId !== givenAnswers.combinationId) {
            dispatch(setTreeProps({ combinationId }));
        }
        if (
            combinationCode &&
            combinationCode !== givenAnswers.combinationCode
        ) {
            dispatch(setTreeProps({ combinationCode }));
        }
        if (offerId && offerId !== givenAnswers.offerId) {
            dispatch(setTreeProps({ offerId }));
        }
        if (
            props.additionalAction &&
            props.additionalAction !== additionalAction
        ) {
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
        if (order) return null;
        if (additionalAction) {
            // dispatch(resetAdditionActions());
            dispatch(
                makeAdditionAction({
                    action: additionalAction,
                    images: files,
                    itemNumber,
                    orderNumber
                })
            );
            return;
        }

        if (!getQuestionsLoading) {
            dispatch(GetQuestions.request({ orderNumber, itemNumber }));
        }
    };

    const _addNewDevice = useCallback(() => {
        dispatch(addNewDevice());
    }, [])

    const question = useMemo(getQuestion, [
        givenAnswers,
        offer.getQuestions.result,
        step,
        itemNumber
    ]);

    const progress = useMemo(() => {
        const base = !!itemNumber ? 0.5 : 0;
        const questionsCount = questionsData
            ? Object.keys(questionsData).length
            : 0;
        if (question && questionsData) {
            if (!questionsCount) return 0;
            return (
                base +
                (0.5 * (questionOrder || 0)) /
                    Object.keys(questionsData).length
            );
        } else {
            return 0;
        }
    }, [question, itemNumber, questionsData, questionOrder]);


    const _uploadImage = (image: ImageFile) => {
        dispatch(uploadImage(image));
    };

    useEffect(() => {
        if (itemNumber) {

        }
    }, [itemNumber])

    useEffect(() => {
        if (!question && !getQuestionsLoading) {
            fetchQuestions()
        }
    }, [question])

    useEffect(() => {
        if (orderNumber && step !== "questions" && step !== "summary") {
            // changeStep("questions");
        }
    }, [step, orderNumber]);

    const returned = {
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
        combinationCode,
        getItemStatus,
        currentItem,
        orderData,
        addNewDevice: _addNewDevice
    };

    return returned
};
