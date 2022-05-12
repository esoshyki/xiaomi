import { select } from "../../../store/selector";
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
} from "../../../store/offerSlice";
import { OfferSteps, Question } from "../../../store/offerSlice/types";

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

    const getQuestion = () => {
        
        
        return null
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
