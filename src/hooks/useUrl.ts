import { useEffect } from 'react';
import { getCreateOrderResult } from './../store/orderSlice/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function useURL() {

    const navigate = useNavigate();

    const createOrderResult = useSelector(getCreateOrderResult);

    useEffect(() => {
        const { status, data } = createOrderResult;
        if (status === "success") {
            navigate("/order/")
        }
    }, [createOrderResult]);



}