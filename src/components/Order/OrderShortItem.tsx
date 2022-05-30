import { OrderItem } from "../../store/orderSlice/types";
import DeviceInfo from "../DeviceInfo";
import OfferCard from "../Offer/OfferCard";

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
    const { name, answers, price, image, status } = itemData;

    console.log(status)

    return (
        <OfferCard isLoading={false} progress={progress}>
            <DeviceInfo
                deviceImage={
                    image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfmJ3BEREy2MsQ6xLonMfa49OMmYlqFCLEg&usqp=CAU"
                }
                deviceName={name}
                answers={answers}
                price={price}
                currency={currency}
                hideChars
                status={status}
            />


        </OfferCard>
    );
};

export default OrderShortItem;
