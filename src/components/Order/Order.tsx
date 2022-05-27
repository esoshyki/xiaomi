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
            {(orderData || (!orderNumber)) && <Offer orderNumber={orderNumber} itemNumber={itemNumber} hidingChars={true}/>}

            {(!orderData && orderNumber) &&  <OfferLoader />}

            {orderNumber && <AddNewDevice />}
        </Container.Flex>
    );
};

export default Order;
