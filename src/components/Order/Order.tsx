import { useMemo } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import useOrderData from "../../hooks/useOrderData";
import { Order as OrderData } from "../../store/orderSlice/types";
import AddNewDevice from "../AddNewDevice";
import { Container } from "../ui";
import OrderItem from "./OrderItem";

const Order = () => {

    const { orderData, currentItem, changeStep, isLoading, progress, step } = useOrderData();
    const { question, getQuestions } = useOfferData();

    return (
        <Container.Flex verticalGap={15}>
            {!!orderData && !!currentItem && <OrderItem 
                {...currentItem} 
                currency={orderData.currency} 
                changeStep={changeStep}
                isLoading={isLoading}
                progress={progress}
                step={step}
                itemData={currentItem}
                currentQuestion={question}
                errors={getQuestions.errors}
                />}
            <AddNewDevice />
        </Container.Flex>
    )
}

export default Order;