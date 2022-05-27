import { useDispatch } from 'react-redux';
import { getViewData, redirectTo } from './../store/viewSlice/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

export const useRedirect = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const viewData = useSelector(getViewData);

    const redirectToOrder = useCallback((orderNumber: string, itemNumber?: string) => {
        navigate(`/order/${orderNumber}/${itemNumber ?? ""}`);
    }, []);

    const returned = {
        redirectToOrder
    }

    useEffect(() => {
        if (viewData.redirectTo) {
            const newRedirect = viewData.redirectTo;
            dispatch(redirectTo(null));
            navigate(newRedirect)
        }
    }, [viewData.redirectTo])

    return returned
};