import { OrderItem as OrderItemData } from "../../store/orderSlice/types";
import DeviceInfo from "../DeviceInfo";
import { OfferQuestions } from "../Offer";
import OfferCard from "../Offer/OfferCard";
import OfferLoader from "../Offer/OfferLoader";
import OrderPrePrice from "./OrderPrePrice";
import {
    GivenAnswers,
    OfferSteps,
    Question,
    ServerError,
} from "../../store/offerSlice/types";
import OrderItemSummary from "./OrderItemSummary";

type OrderItemProps = {
    itemData: OrderItemData;
    progress: number;
    isLoading: boolean;
    step: string;
    currency: string;
    changeStep: (step: string) => void;
    currentQuestion: Question | null;
    errors: ServerError[];
    changeContent: boolean;
    givenAnswers: GivenAnswers;
    offerStep: OfferSteps;
    getItemStatus: () => void;
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
        givenAnswers,
        changeContent,
        offerStep,
        getItemStatus,
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
                hideChars
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

            {(step === "questions" || step === "F") && (
                <OfferQuestions
                    question={currentQuestion}
                    errors={errors}
                    givenAnswers={givenAnswers}
                    changeContent={changeContent}
                />
            )}

            {offerStep === "summary" && (
                <OrderItemSummary
                    data={itemData}
                    isLoading={isLoading}
                    getItemStatus={getItemStatus}
                />
            )}

        </OfferCard>
    );
};

export default OrderItem;
