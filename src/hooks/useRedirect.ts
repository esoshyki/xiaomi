import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getViewData, redirectTo } from './../store/viewSlice/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { addNewDevice, restoreOffer } from '../store/offerSlice';
import { restoreOrderState } from '../store/orderSlice';

export const useRedirect = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const viewData = useSelector(getViewData);

    const redirectToOrder = useCallback((orderNumber: string, itemNumber?: string) => {
        navigate(`/order/${orderNumber}/${itemNumber ?? ""}`);
    }, []);

    const _addNewDevice = useCallback((orderNumber: string) => {
        dispatch(addNewDevice());
        navigate("/create/" + orderNumber)
    }, [])

    const returned = {
        redirectToOrder,
        addNewDevice: _addNewDevice
    };

    useEffect(() => {
        if (location.pathname === "/") {
            dispatch(restoreOffer());
            dispatch(restoreOrderState());
        }
    }, [location])

    useEffect(() => {
        if (viewData.redirectTo) {
            const newRedirect = viewData.redirectTo;
            dispatch(redirectTo(null));
            navigate(newRedirect)
        }
    }, [viewData.redirectTo])

    return returned
};