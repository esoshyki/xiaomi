import { OrderItem as OrderItemData } from "../../store/orderSlice/types";
import DeviceInfo from "../DeviceInfo";
import { OfferQuestions } from "../Offer";
import OfferCard from "../Offer/OfferCard";
import OfferLoader from "../Offer/OfferLoader";
import OrderPrePrice from "./OrderPrePrice";
import { Question, ServerError } from "../../store/offerSlice/types";

type OrderItemProps = {
    itemData: OrderItemData;
    progress: number;
    isLoading: boolean;
    step: string;
    currency: string;
    changeStep: (step: string) => void;
    currentQuestion: Question | null;
    errors: ServerError[];
};

const OrderItem = (props: OrderItemProps) => {
    const {
        progress,
        isLoading,
        step,
        changeStep,
        itemData,
        currency,
        currentQuestion,
        errors,
    } = props;
    const { name, answers, price, image } = itemData;

    return (
        <OfferCard progress={progress} isLoading={isLoading}>
            <DeviceInfo
                deviceName={name}
                deviceImage={
                    image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfmJ3BEREy2MsQ6xLonMfa49OMmYlqFCLEg&usqp=CAU"
                }
                answers={answers}
            />

            {step === "N" && (
                <OrderPrePrice
                    currency={currency}
                    price={price}
                    onClick={() => {
                        changeStep("questions");
                    }}
                />
            )}

            {step === "questions" && (
                <OfferQuestions question={currentQuestion} errors={errors} />
            )}

            {isLoading && <OfferLoader />}
        </OfferCard>
    );
};

export default OrderItem;
