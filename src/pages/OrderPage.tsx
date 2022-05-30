import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderItemData, GetOrder } from "../store/orderSlice";
import { withLayout } from "../components/Layout/withLayout";
import { Container } from "../components/ui";
import OrderShortItem from "../components/Order/OrderShortItem";
import PageLoading from "../components/Layout/PageLoading";
import AddNewDevice from "../components/AddNewDevice";
import OfferLoader from "../components/Offer/OfferLoader";
import OfferOrdering from "../components/Offer/OfferOrdering";

const OrderPage = () => {
    const { orderNumber } = useParams();
    const { isLoading, errors, orderData } = useSelector(getOrderItemData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading) {
            dispatch(GetOrder.request({ orderNumber }));
        }
    }, [orderNumber]);

    useEffect(() => {
        if (!isLoading && !orderData && !errors.length) {
            dispatch(GetOrder.request({ orderNumber }));
        }
    }, [orderData, isLoading, errors]);

    const showOfferOrdering = useMemo(() => {
        if (!orderData) return false;

        return orderData.items.every((item) => item.status === "D");
    }, [orderData]);

    console.log("here")

    return (
        <Container.Flex verticalGap={24} padding={"0 0 20px 0"}>
            {isLoading && <OfferLoader />}
            {orderData &&
                orderData?.items.map((item) => (
                    <OrderShortItem
                        itemData={item}
                        key={item.itemNumber}
                        progress={1}
                        currency={orderData.currency}
                    />
                ))}

            <AddNewDevice />

            {showOfferOrdering && !!orderData && (
                <OfferOrdering
                    count={orderData.items.length}
                    currency={orderData.currency}
                    amount={orderData.amount}
                />
            )}
        </Container.Flex>
    );
};

export default withLayout(OrderPage, "Заказ");
