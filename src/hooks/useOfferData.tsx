import { select } from '../store/selector';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { CheckImei, GetQuestions, setImeiValue, setStep } from '../store/offerSlice';
import { OfferSteps } from '../store/offerSlice/types';

export const useOfferData = () => {
    const offer = useSelector(select.offer);
    const dispatch = useDispatch()

    const setImei = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setImeiValue(e.target.value))
    }

    const getQuestions = (phoneID: string) => {
        dispatch(GetQuestions.request(phoneID))
    }

    const changeStep = (step: OfferSteps) => {
        dispatch(setStep(step))
    }

    const checkImei = (emai: string) => dispatch(CheckImei.request(emai))

    return ({
        ...offer,
        setImei,
        checkImei,
        getQuestions,
        changeStep
    })
}
