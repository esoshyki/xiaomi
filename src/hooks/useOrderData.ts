import { GetOrder } from './../store/orderSlice/index';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSendPhotosStatus } from '../store/orderSlice';
export default function useOrderData () {
    
    const sendPhotoStatus = useSelector(getOrderSendPhotosStatus);

    const dispatch = useDispatch();

    const getOrderData = (orderNumber?: string, deviceId?: string) => {
        console.log("HERE");
        dispatch(GetOrder.request({
            orderNumber,
            deviceId
        }))
    }

    return ({
        sendPhotoStatus,
        getOrderData
    })
}