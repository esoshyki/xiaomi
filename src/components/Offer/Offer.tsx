import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import { Typography, Button } from "../ui";
import {
    memo,
    useEffect,
    useRef,
    useState,
    useCallback,
    Fragment,
    useMemo,
} from "react";
import OfferDevice from "./OfferDevice";
import { OfferQuestions } from ".";
import OfferCard from "./OfferCard";
import OfferSummary from "./OfferSummary";
import AddNewDevice from "../AddNewDevice";
import { useParams } from "react-router-dom";
import OfferPrePrice from "./OfferPrePrice";
import OrderDevice from "./OrderDevice";

const Offer = ({ hidingChars }: { hidingChars?: boolean | undefined }) => {
    const { orderNumber, itemNumber } = useParams();

    const {
        step,
        deviceInfo,
        givenAnswers,
        getQuestions,
        progress,
        question,
        isLoading,
        changeContent,
        addNewDevice,
        giveAnswer,
        currentItem,
        orderData,
        changeStep,
    } = useOfferData({ orderNumber, itemNumber });

    console.log(step);
    return (
        <Container.Flex verticalGap={24} alignItems="start" padding="0 0 24px">
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
                <OfferCard isLoading={isLoading} progress={progress}>
                    {deviceInfo && (
                        <OfferDevice
                            deviceInfo={deviceInfo}
                            givenAnswers={givenAnswers.answers}
                        />
                    )}

                    {!deviceInfo && !!currentItem && <OrderDevice data={currentItem} hidingChars/> }
                    {step === "questions" && (
                        <OfferQuestions
                            question={question}
                            errors={getQuestions.errors}
                            givenAnswers={givenAnswers}
                            changeContent={changeContent}
                            giveAnswer={giveAnswer}
                        />
                    )}
                    {step === "createOrderFailure" && (
                        <Typography.Error>
                            Ошибка создания заказа.
                        </Typography.Error>
                    )}

                    {step === "summary" && <OfferSummary />}

                    {step === "prePrice" && (
                        <OfferPrePrice
                            currency={orderData?.currency}
                            itemData={currentItem}
                            onClick={() => {
                                changeStep("questions");
                            }}
                        />
                    )}
                </OfferCard>

                {step === "summary" && <AddNewDevice onClick={addNewDevice} />}
            </Container.Flex>

        </Container.Flex>
    );
};

export default memo(Offer);
