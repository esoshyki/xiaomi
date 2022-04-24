import { select } from '../store/selector';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { CheckImei, setImeiValue } from '../store/offerSlice';

export const useOfferData = () => {
    const offer = useSelector(select.offer);
    const dispatch = useDispatch()

    const setImei = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setImeiValue(e.target.value))
    }

    const checkImei = (emai: string) => dispatch(CheckImei.request(emai))

    return ({
        ...offer,
        setImei,
        checkImei
    })
}
