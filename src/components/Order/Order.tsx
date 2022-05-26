import { useOfferData } from "../../hooks/useOfferData";
import AddNewDevice from "../AddNewDevice";
import Offer from "../Offer";
import OfferLoader from "../Offer/OfferLoader";
import { Container } from "../ui";
import OrderShortItem from "./OrderShortItem";

const Order = ({
    orderNumber,
    itemNumber,
    qrCode
}: {
    orderNumber?: string
    itemNumber?: string
    qrCode: boolean
}) => {
    const { orderData } = useOfferData(orderNumber);

    console.log(orderData, orderNumber, itemNumber)

    return (
        <Container.Flex
            verticalGap={15}
            alignItems="start"
            styles={{
                minHeight: "324px",
            }}
        >
            {!!orderData?.items &&
                orderData.items
                    .filter((el) => el.itemNumber !== itemNumber)
                    .map((item) => (
                        <OrderShortItem
                            key={item.itemNumber}
                            progress={1}
                            itemData={item}
                            currency={orderData.currency}
                        />
                    ))}
            {(orderData || (!orderNumber)) && <Offer orderNumber={orderNumber} itemNumber={itemNumber} />}

            {(!orderData && orderNumber) &&  <OfferLoader />}

            {orderNumber && <AddNewDevice />}
        </Container.Flex>
    );
};

export default Order;
