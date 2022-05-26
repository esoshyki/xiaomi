import {
    GetItemStatus, 
    } from './../store/orderSlice/index';
import { useMemo, useCallback } from 'react';
import { getOrderData } from './../store/orderSlice';

import { useDispatch, useSelector } from 'react-redux';

function useOrderData(orderNumber?: string) {

    const orderData = useSelector(getOrderData);

    const sendPhotoStatus = orderData.sendPhoto.status;
    const isLoading = orderData.order.loading || orderData.sendPhoto.loading;

    const progress = useMemo(() => 0.5, []);

    const dispatch = useDispatch();

    const getItemStatus = useCallback(() => {
        dispatch(GetItemStatus.request())
    }, []);

    const returned = ({
        sendPhotoStatus,
        orderData: orderData.order.data,
        progress,
        isLoading,
        getItemStatus,
        orderNumber,
    })

    return returned
};

export default useOrderData