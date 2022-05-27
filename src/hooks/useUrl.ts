import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { restoreOrderState, GetOrder } from './../store/orderSlice/index';
import { useLocation } from 'react-router-dom';
import { GetQuestions, restoreOffer, setStep } from '../store/offerSlice';

export default function useURL(action: "create" | "order") {

    const location = useLocation();
    const dispatch = useDispatch();
    const params = useParams();

    const [once, setOnce] = useState(false);

    const { pathname, search } = useMemo(() => location, [location]);

    const itemNumber = useMemo(() => params.itemNumber, [location]);
    const orderNumber = useMemo(() => params.orderNumber, [location]);
    const qrCode = useMemo(() => search.search("qrcode") >= 0, [location]);

    useEffect(() => {

        if (once) return;

        if (pathname === "/create")  {
            dispatch(restoreOffer());
            dispatch(restoreOrderState());
            return;
        }

        if (/^\/create\/.+/.test(pathname)) {
            dispatch(setStep("start"))
        }

        if (orderNumber) {
            dispatch(GetOrder.request({
                orderNumber,
                itemNumber
            }))
        };

        setOnce(true)

    }, [location])

    return ({
        pathname,
        itemNumber,
        orderNumber,
        qrCode
    })

}