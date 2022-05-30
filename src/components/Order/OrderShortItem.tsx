import { OrderItem } from "../../store/orderSlice/types";
import DeviceInfo from "../DeviceInfo";
import OfferCard from "../Offer/OfferCard";
import OrderDevice from '../Offer/OrderDevice'

interface OrderShortItemProps {
    progress: number;
    itemData: OrderItem;
    currency: string;
}

const OrderShortItem = ({
    progress,
    itemData,
    currency,
}: OrderShortItemProps) => {

    return (
        <OfferCard isLoading={false} progress={progress}>

            <OrderDevice 
                data={itemData}
                hidingChars
            />

        </OfferCard>
    );
};

export default OrderShortItem;
