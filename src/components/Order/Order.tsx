import { useMemo } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import useOrderData from "../../hooks/useOrderData";
import AddNewDevice from "../AddNewDevice";
import { Container } from "../ui";
import OrderItem from "./OrderItem";

const Order = () => {
    const {
        orderData,
        currentItem,
        changeStep,
        isLoading,
        step,
        getItemStatus,
    } = useOrderData();
    const {
        getQuestion,
        getQuestions,
        givenAnswers,
        changeContent,
        isLoading: isQuestionsLoading,
        step: offerStep,
        fetchQuestions,
        questionsTree,
        progress,
        combinationCode
    } = useOfferData(true);

    const currentQuestion = useMemo(() => {
        if (!currentItem) return null;

        if ((step === "questions" || step === "N") && !isQuestionsLoading) {
            const question = getQuestion(true);
            if (question) return question;
            fetchQuestions();
            return null;
        }
        return null;
    }, [givenAnswers, getQuestions.result, questionsTree, combinationCode, offerStep]);

    return (
        <Container.Flex verticalGap={15} alignItems="start" styles={{
            minHeight: "324px"
        }}>
            {!!currentItem && (
                <OrderItem
                    {...currentItem}
                    givenAnswers={givenAnswers}
                    changeContent={changeContent}
                    currency={orderData?.currency || ""}
                    changeStep={changeStep}
                    isLoading={isLoading}
                    progress={progress}
                    step={step}
                    itemData={currentItem}
                    currentQuestion={currentQuestion}
                    errors={getQuestions.errors}
                    offerStep={offerStep}
                    getItemStatus={getItemStatus}
                />
            )}
            <AddNewDevice />
        </Container.Flex>
    );
};

export default Order;
