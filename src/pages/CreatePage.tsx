import { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { withLayout } from "../components/Layout/withLayout";
import Offer from "../components/Offer";
import { restoreOffer } from "../store/offerSlice";
import { GetOrder, getOrderItemData } from "../store/orderSlice";

function CreatePage() {
    const { itemNumber, orderNumber } = useParams();
    const { isLoading, errors, orderData } = useSelector(getOrderItemData);
    const dispatch = useDispatch();

    if (!itemNumber) {
        dispatch(restoreOffer())
    }

    const currentItem = useMemo(() => {
        return orderData?.items.find((item) => item.itemNumber === itemNumber);
    }, [orderData]);

    useEffect(() => {
        if (!orderNumber) return;
        if (!isLoading && !orderData && !errors.length) {
            dispatch(GetOrder.request({itemNumber, orderNumber}))
        }
    }, [orderData, isLoading, errors, orderNumber]);

    const showOffer = useMemo(() => {
        if (!itemNumber) return true;
        if (isLoading) return false;
        if (!currentItem) return false;
        if (!itemNumber && !orderNumber) return true;
        return true;
    }, [isLoading, currentItem]);

    return <Fragment>{showOffer && <Offer />}</Fragment>;
}

export default withLayout(CreatePage, "Заказ");
