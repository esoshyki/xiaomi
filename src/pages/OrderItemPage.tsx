import { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { withLayout } from "../components/Layout/withLayout";
import Offer from "../components/Offer";
import { GetOrder, getOrderItemData } from "../store/orderSlice";

const OrderPage = () => {

    const { itemNumber, orderNumber } = useParams();
    const navigate = useNavigate();
    const { isLoading, errors, orderData } = useSelector(getOrderItemData);
    const dispatch = useDispatch();

    const currentItem = useMemo(() => {
        return orderData?.items.find((item) => item.itemNumber === itemNumber);
    }, [itemNumber, orderData]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(GetOrder.request({ itemNumber, orderNumber }))
        }
    }, [itemNumber]);


    useEffect(() => {
        if (!isLoading && !orderData && !errors.length) {
            dispatch(GetOrder.request({itemNumber, orderNumber}))
        };

        if (orderData?.items.every(el => el.status === "D") || orderData?.status === "D") {
            navigate("/order/" + orderNumber)
        }
    }, [orderData, isLoading, errors]);

    const showOffer = useMemo(() => {
        if (isLoading) return false;
        if (!currentItem) return false;
        if (!itemNumber && !orderNumber) return true;
        return true;
    }, [currentItem]);

    return <Fragment>
            {showOffer && <Offer />}
        </Fragment>;
};

export default withLayout(OrderPage, "Заказ");
