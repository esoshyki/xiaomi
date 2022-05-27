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

const OrderPage = () => {
    const { orderNumber } = useParams();
    const { isLoading, errors, orderData } = useSelector(getOrderItemData);
    const dispatch = useDispatch();

    console.log(orderData);

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

    return (
        <Container.Flex verticalGap={24}>
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
        </Container.Flex>
    );
};

export default withLayout(OrderPage, "Заказ");
