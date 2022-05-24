import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCreateOrderResult, restoreOrderState, setItemNumber, setOrderNumber } from './../store/orderSlice/index';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { restoreOffer } from '../store/offerSlice';


export default function useURL() {

    const location = useLocation();
    const { pathname } = location;

    const dispatch = useDispatch();

    useEffect(() => {
        if (pathname === "/create")  {
            dispatch(restoreOffer());
            dispatch(restoreOrderState())
        }
    }, [pathname])

    const navigate = useNavigate();

    const createOrderResult = useSelector(getCreateOrderResult);

    useEffect(() => {
        const { status, itemNumber, orderNumber } = createOrderResult;
        if (status === "success") {
            navigate(`/order/${orderNumber}/${itemNumber}`)
        }
    }, [createOrderResult]);

    return ({
        pathname
    })

}