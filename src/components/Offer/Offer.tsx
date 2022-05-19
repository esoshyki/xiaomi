import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import { Progress, Card, Info, Typography, Button } from "../ui";
import { memo, useEffect, useRef, useState, useMemo } from "react";
import OfferDevice from "./OfferDevice";
import AddNewDevice from "../AddNewDevice";
import { OfferQuestions } from ".";

const Offer = () => {
    const {
        step,
        fetchQuestions,
        getNextQuestion,
        deviceInfo,
        givenAnswers,
        questionsTree,
        createOrder,
        getQuestions,
        progress,
        
    } = useOfferData();

    const [hint, setHint] = useState(true);
    const [cardHeight, setCardHeight] = useState("auto");
    const [cardWidth, setCardWidth] = useState("auto");

    const hintRef = useRef<HTMLDivElement>(null);

    const { errors } = getQuestions;

    const question = useMemo(getNextQuestion, [givenAnswers, questionsTree]);

    useEffect(() => {
        if (step !== "questions") return;
        if (!question && !getQuestions.loading && !createOrder.loading) {
            fetchQuestions();
        }
    }, [question, getQuestions.loading, createOrder.loading]);

    useEffect(() => {
        if (!!hintRef.current) {
            if (window.innerWidth < 660) {
                setCardHeight(hintRef.current.scrollHeight + "px");
            } else {
                setCardWidth(hintRef.current.scrollWidth + "px");
            }
        }
    }, [setCardHeight, setCardWidth]);

    useEffect(() => {
        if (step === "start") {
            fetchQuestions();
        }
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
            <Card
                ref={hintRef}
                fullWidth
                isHidden={!hint || undefined}
                padding="50px 30px"
                animateHeight={cardHeight !== "auto"}
                animateWidth={cardWidth !== "auto"}
                styles={{
                    height: cardHeight,
                    width: cardWidth,
                    flexShrink: 0,
                }}
            >
                <Info>
                    За 2 минуты рассчитайте скидку на покупку у 
                    <Typography.Link href="/" target="_blank">
                        партнёров
                    </Typography.Link>
                    , взамен на ваш старый смартфон
                </Info>
                <Button
                    variant="outline"
                    fullWidth
                    uppercase
                    styles={{ marginTop: "16px" }}
                >
                    Подробнее
                </Button>
            </Card>

            <Card
                padding="28px"
                fullWidth
                onClick={() => setHint(false)}
                isQuestion={true}
                minHeight={312}
            >
                <Progress progress={progress} />
                {deviceInfo && (
                    <OfferDevice
                        deviceInfo={deviceInfo}
                        givenAnswers={givenAnswers.answers}
                    />
                )}
                {step === "questions" && (
                    <OfferQuestions question={question} errors={errors} />
                )}
            </Card>

            {step === "pending" && <AddNewDevice />}
        </Container.Flex>
    );
};

export default memo(Offer);
