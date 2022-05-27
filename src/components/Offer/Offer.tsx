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
} from "react";
import OfferDevice from "./OfferDevice";
import { OfferQuestions } from ".";
import OfferCard from "./OfferCard";
import OfferSummary from "./OfferSummary";
import AddNewDevice from "../AddNewDevice";

const Offer = ({
    orderNumber,
    itemNumber,
    hidingChars
}: {
    orderNumber?: string;
    itemNumber?: string;
    hidingChars?: boolean | undefined;
}) => {
    const {
        step,
        deviceInfo,
        givenAnswers,
        getQuestions,
        progress,
        question,
        isLoading,
        changeContent,
        getItemStatus,
        currentItem,
        orderData,
        addNewDevice,
        giveAnswer,
    } = useOfferData({ orderNumber, itemNumber });

    const [hint, setHint] = useState(true);
    const [cardHeight, setCardHeight] = useState("auto");
    const [cardWidth, setCardWidth] = useState("auto");

    const hintRef = useRef<HTMLDivElement>(null);

    console.log(currentItem);
    console.log(orderNumber, itemNumber)

    useEffect(() => {
        if (!!hintRef.current) {
            if (window.innerWidth < 660) {
                setCardHeight(hintRef.current.scrollHeight + "px");
            } else {
                setCardWidth(hintRef.current.scrollWidth + "px");
            }
        }
    }, [setCardHeight, setCardWidth]);

    const onClick = useCallback(() => {
        setHint(false);
        // changeStep("questions");
    }, []);

    return (
        <Fragment>
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
                            giveAnswer={giveAnswer}
                        />
                    )}
                    {step === "createOrderFailure" && (
                        <Typography.Error>
                            Ошибка создания заказа.
                        </Typography.Error>
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
            {step === "summary" && <AddNewDevice onClick={addNewDevice} />}
        </Fragment>
    );
};

export default Offer;
