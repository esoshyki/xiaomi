import { useOfferData } from "../../hooks/useOfferData";
import AddNewDevice from "../AddNewDevice";
import Offer from "../Offer";
import OfferLoader from "../Offer/OfferLoader";
import { Container } from "../ui";

const OrderItem = ({
    orderNumber,
    itemNumber,
    qrCode
}: {
    orderNumber?: string
    itemNumber?: string
    qrCode: boolean
}) => {

    return (
        <Container.Flex
            verticalGap={15}
            alignItems="start"
            styles={{
                minHeight: "324px",
            }}
        >
            {<Offer orderNumber={orderNumber} itemNumber={itemNumber} />}

        </Container.Flex>
    );
};

export default OrderItem;
