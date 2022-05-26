import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import { Typography, Button } from "../ui";
import { memo, useEffect, useRef, useState, useCallback } from "react";
import OfferDevice from "./OfferDevice";
import { OfferQuestions } from ".";
import OfferCard from "./OfferCard";
import OfferSummary from "./OfferSummary";

const Offer = ({
    orderNumber,
    itemNumber,
}: {
    orderNumber?: string;
    itemNumber?: string;
}) => {
    const {
        step,
        deviceInfo,
        givenAnswers,
        getQuestions,
        progress,
        question,
        isLoading,
        changeStep,
        changeContent,
        getItemStatus,
        currentItem,
        orderData,
    } = useOfferData(orderNumber, itemNumber);

    console.log(currentItem);

    const [hint, setHint] = useState(true);
    const [cardHeight, setCardHeight] = useState("auto");
    const [cardWidth, setCardWidth] = useState("auto");

    const hintRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!!hintRef.current) {
            if (window.innerWidth < 660) {
                setCardHeight(hintRef.current.scrollHeight + "px");
            } else {
                setCardWidth(hintRef.current.scrollWidth + "px");
            }
        }
    }, [setCardHeight, setCardWidth]);

    console.log(currentItem);

    const onClick = useCallback(() => {
        setHint(false);
        // changeStep("questions");
    }, []);

    return (
        <Container.Flex
            gap={36}
            fullWidth
            fullHeight
            direction="row"
            alignItems="stretch"
            breakpoints={{
                659.9: {
                    flexDirection: "column",
                    alignItems: "center",
                },
            }}
        >
            <OfferCard
                isLoading={isLoading}
                progress={progress}
                onClick={onClick}
            >
                {deviceInfo && (
                    <OfferDevice
                        deviceInfo={deviceInfo}
                        givenAnswers={givenAnswers.answers}
                    />
                )}
                {step === "questions" && (
                    <OfferQuestions
                        question={question}
                        errors={getQuestions.errors}
                        givenAnswers={givenAnswers}
                        changeContent={changeContent}
                    />
                )}
                {step === "createOrderFailure" && (
                    <Typography.Error>Ошибка создания заказа.</Typography.Error>
                )}

                {step === "summary" && !!currentItem && (
                    <OfferSummary
                        item={currentItem}
                        getItemStatus={getItemStatus}
                        isLoading={!!orderData}
                    />
                )}
            </OfferCard>
        </Container.Flex>
    );
};

export default memo(Offer);
