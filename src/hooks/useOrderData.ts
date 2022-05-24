import { getCurrentItem, setCurrentItemStatus, setItemNumber, setOrderNumber, getItemNumber, getOrderNumber, getOrderResponseData, GetItemStatus } from './../store/orderSlice/index';
import { useMemo, useEffect } from 'react';
import { GetOrder, getOrderPending } from './../store/orderSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSendPhotosStatus } from '../store/orderSlice';
import { useParams } from 'react-router-dom';

export default function useOrderData () {

    const { orderNumber: newOrderNumber, itemNumber: newItemNumber } = useParams();
    
    const sendPhotoStatus = useSelector(getOrderSendPhotosStatus);
    const isLoading = useSelector(getOrderPending)
    const orderData = useSelector(getOrderResponseData);
    const currentItem = useSelector(getCurrentItem);
    const orderNumber = useSelector(getOrderNumber);
    const itemNumber = useSelector(getItemNumber);

    const progress = useMemo(() => 0.5, []);

    const dispatch = useDispatch();

    const step = useMemo(() => {return currentItem ? currentItem.status : "loading" }, [currentItem]);

    const setOrderPath = (newOrderNumber?: string, newItemNumber?: string) => {
        if (newOrderNumber && newOrderNumber !== orderNumber) {
            dispatch(setOrderNumber(newOrderNumber))
        }
        if (newItemNumber && newItemNumber !== itemNumber) {
            dispatch(setItemNumber(newItemNumber))
        }
    }

    const changeStep = useCallback((step: string) => {
        dispatch(setCurrentItemStatus(step))
    }, [])

    useEffect(() => {
        setOrderPath(newOrderNumber, newItemNumber);
        if (newOrderNumber && newItemNumber) {
            dispatch(GetOrder.request({
                orderNumber: newOrderNumber,
                itemNumber: newItemNumber
            }));
        }
    }, [newItemNumber, newOrderNumber]);

    const getItemStatus = useCallback(() => {
        dispatch(GetItemStatus.request())
    }, [])

    return ({
        sendPhotoStatus,
        // getOrderData: _getOrderData,
        orderData,
        progress,
        isLoading,
        currentItem,
        step,
        changeStep,
        setOrderPath,
        getItemStatus
    })
}