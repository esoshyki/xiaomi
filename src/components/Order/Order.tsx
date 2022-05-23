import { useMemo } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import useOrderData from "../../hooks/useOrderData";
import { Order as OrderData } from "../../store/orderSlice/types";
import AddNewDevice from "../AddNewDevice";
import { Container } from "../ui";
import OrderItem from "./OrderItem";

const Order = () => {

    const { orderData, currentItem, changeStep, isLoading, progress, step } = useOrderData();
        const { question, getQuestions, givenAnswers, changeContent, isLoading: isQuestionsLoading } = useOfferData(true);

    const currentQuestion = useMemo(() => {
        console.log(`step: ${step}`);
        console.log(isQuestionsLoading);
        if (step === "questions" && !isQuestionsLoading) {
            return question
        };
        return null
    }, [step, question, isQuestionsLoading])

    return (
        <Container.Flex verticalGap={15}>
            {!!orderData && !!currentItem && <OrderItem 
                {...currentItem} 
                givenAnswers={givenAnswers}
                changeContent={changeContent}
                currency={orderData.currency} 
                changeStep={changeStep}
                isLoading={isLoading}
                progress={progress}
                step={step}
                itemData={currentItem}
                currentQuestion={currentQuestion}
                errors={getQuestions.errors}
                />}
            <AddNewDevice />
        </Container.Flex>
    )
}

export default Order;