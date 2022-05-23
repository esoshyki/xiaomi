import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCreateOrderResult, setItemNumber, setOrderNumber } from './../store/orderSlice/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function useURL() {

    const navigate = useNavigate();

    const createOrderResult = useSelector(getCreateOrderResult);

    useEffect(() => {
        const { status, itemNumber, orderNumber } = createOrderResult;
        if (status === "success") {
            navigate(`/order/${orderNumber}/${itemNumber}`)
        }
    }, [createOrderResult]);



}