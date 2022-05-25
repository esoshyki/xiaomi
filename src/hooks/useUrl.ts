import { useDispatch } from 'react-redux';
import { useEffect, useMemo, useCallback } from 'react';
import { getCreateOrderResult, restoreOrderState, setItemNumber, setOrderNumber, setQrCode, getQrCode, getCurrentItem } from './../store/orderSlice/index';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { restoreOffer } from '../store/offerSlice';
import qs from 'qs'

export default function useURL() {

    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const qrCodeParam = useMemo(() => {return searchParams.get("qrcode")}, [searchParams]);

    const currentItem = useSelector(getCurrentItem);
    const qrCode = useSelector(getQrCode);

    const { pathname, search } = location;

    useEffect(() => {
        if (pathname === "/create")  {
            dispatch(restoreOffer());
            dispatch(restoreOrderState())
        }
    }, [pathname, dispatch]);

    useEffect(() => {
        dispatch(setQrCode(qrCodeParam || undefined))
    }, [qrCodeParam, dispatch]);

    const removeQrCodeParam = useCallback(() => {
        searchParams.delete("qrcode");
        setSearchParams(searchParams)
    }, [currentItem?.status]);

    useEffect(() => {
        if (currentItem?.status === "questions" && qrCode) {
            removeQrCodeParam()
        }
    }, [currentItem, qrCode])


    const createOrderResult = useSelector(getCreateOrderResult);

    useEffect(() => {
        const { status, itemNumber, orderNumber } = createOrderResult;
        if (status === "success") {
            navigate(`/order/${orderNumber}/${itemNumber}`);

        }
    }, [createOrderResult]);

    return ({
        pathname,
    })

}