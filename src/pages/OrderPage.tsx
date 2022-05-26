import { memo } from "react";
import { withLayout } from "../components/Layout/withLayout";
import Order from "../components/Order";
import useURL from "../hooks/useUrl";

const OrderPage = () => {
    const { orderNumber, itemNumber, qrCode } = useURL("order");

    console.log(orderNumber, itemNumber, qrCode);

    return (
        <Order
            orderNumber={orderNumber}
            itemNumber={itemNumber}
            qrCode={qrCode}
        />
    );
};

export default memo(withLayout(OrderPage, "Заказ"));
