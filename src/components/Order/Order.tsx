import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRedirect } from "../../hooks/useRedirect";
import { getOrderData } from "../../store/orderSlice";
import AddNewDevice from "../AddNewDevice";
import OfferLoader from "../Offer/OfferLoader";
import { Container } from "../ui";
import OrderShortItem from "./OrderShortItem";

const Order = ({
    orderNumber,
}: {
    orderNumber?: string
}) => {

    const _orderData = useSelector(getOrderData);
    const { addNewDevice } = useRedirect()

    const orderData = useMemo(() => {
        return _orderData.order.data;
    }, [_orderData])

    return (
        <Container.Flex
            gap={36}
            alignItems="start"
            direction="row"
            wrapped
            styles={{
                minHeight: "324px",

            }}
            breakpoints={{
                660: {
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "24px"
                }
            }}
        >
            {orderData?.items.map((item) => (
                <OrderShortItem itemData={item} key={item.itemNumber} currency={orderData.currency} progress={1}/>
            ))}

            {(!orderData && orderNumber) &&  <OfferLoader />}

            {!!orderNumber && <AddNewDevice onClick={() => {addNewDevice(orderNumber)}}/>}
        </Container.Flex>
    );
};

export default Order;
