import { OfferStep } from ".";
import { useOfferData } from "../../hooks/useOfferData";
import { OfferSteps } from "../../store/offerSlice/types";
import Container from "../ui/Container";
import { Progress, Card, Info, Typography, Button } from "../ui";
import { useRef, useState } from "react";

const Offer = () => {
    const { step } = useOfferData();

    const [hint, setHint] = useState(true);

    const hintRef = useRef<HTMLDivElement>(null);

    const getContent = () => {
        switch (step) {
            case OfferSteps.imei:
                return <OfferStep.Imei hint={hint} setHint={setHint} />;
            case OfferSteps.isYourPhone:
                return <OfferStep.IsYourPhone />;
            case OfferSteps.questions:
                return <OfferStep.Questions />;
            default:
                return <OfferStep.Imei hint={hint} setHint={setHint} />;
        }
    };

    return (
        <Container.Flex verticalGap={10} padding={20} fullHeight>
            <Card
                fullWidth
                ref={hintRef}
                isHidden={!hint || undefined}
            >
                <Container.Flex gap={5} padding={28} fullWidth>
                    <Info>
                        За 2 минуты рассчитайте скидку на покупку у 
                        <Typography.Link>партнёров</Typography.Link>, взамен
                        на ваш старый смартфон
                    </Info>
                    <Button variant="outline" fullWidth>
                        ПОДРОБНЕЕ
                    </Button>
                </Container.Flex>
            </Card>

            <Card fullWidth>
                {step !== OfferSteps.imei && <Progress />}
                <Container.Flex
                    fullHeight
                    fullWidth
                    styles={{ maxWidth: "700px", padding: "28px" }}
                >
                    {getContent()}
                </Container.Flex>
            </Card>
        </Container.Flex>
    );
};

export default Offer;
