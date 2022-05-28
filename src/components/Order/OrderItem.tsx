import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useOfferData } from "../../hooks/useOfferData";
import { useRedirect } from "../../hooks/useRedirect";
import useURL from "../../hooks/useUrl";
import { getOrderData, getOrderItemData } from "../../store/orderSlice";
import AddNewDevice from "../AddNewDevice";
import { withLayout } from "../Layout/withLayout";
import Offer from "../Offer";
import OfferLayout from "../Offer/OfferLayout";
import OfferLoader from "../Offer/OfferLoader";
import { Container } from "../ui";
import OrderPrePrice from "../Offer/OfferPrePrice";

const OrderItem = ({}: {}) => {
    const { itemNumber, orderNumber } = useURL();

    const navigate = useNavigate();

    const { isLoading, orderData, errors } = useSelector(getOrderItemData);

    const currentItem = useMemo(
        () => orderData?.items.find((el) => el.itemNumber === itemNumber),
        [itemNumber, orderData]
    );
    const status = useMemo(() => currentItem?.status, [currentItem]);

    return (
        <OfferLayout isLoading={isLoading} onClick={() => {}} progress={0.5}>
            <Container.Flex
                verticalGap={15}
                alignItems="start"
                styles={{
                    minHeight: "324px",
                }}
            >
                {!!currentItem && !!orderData && status === "N" && (
                    <OrderPrePrice
                        currency={orderData.currency}
                        itemData={currentItem}
                        onClick={() =>
                            navigate(
                                "/create/" + orderNumber + "/" + itemNumber
                            )
                        }
                    />
                )}
            </Container.Flex>
        </OfferLayout>
    );
};

export default withLayout(OrderItem, "Заказ");
