import { Fragment, memo } from "react";
import { withLayout } from "../components/Layout/withLayout";
import OrderItem from "../components/Order/OrderItem";
import Order from "../components/Order/Order";
import useURL from "../hooks/useUrl";

const OrderPage = ({ create }: { create?: true }) => {
    const { orderNumber, itemNumber, qrCode } = useURL("order");

    console.log(orderNumber, itemNumber);

    return (
        <Fragment>
            {create && (
                <OrderItem
                    orderNumber={orderNumber}
                    itemNumber={itemNumber}
                    qrCode={qrCode}
                />
            )}
            {!create && !!orderNumber && (
                <Order orderNumber={orderNumber} />
            )}
        </Fragment>
    );
};

export default memo(withLayout(OrderPage, "Заказ"));
