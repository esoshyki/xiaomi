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
        <Container.Flex
            verticalGap={10}
            fullWidth
            fullHeight
            styles={{ maxWidth: "400px" }}
            padding={28}
        >
            <Card fullWidth ref={hintRef} isHidden={!hint || undefined} >
                <Container.Flex gap={5} fullWidth padding={28} >
                    <Info>
                        За 2 минуты рассчитайте скидку на покупку у 
                        <Typography.Link>партнёров</Typography.Link>, взамен
                        на ваш старый смартфон
                    </Info>
                    <Button variant="outline">
                        ПОДРОБНЕЕ
                    </Button>
                </Container.Flex>
            </Card>

            <Card fullWidth padding={28} >
                <Container.Flex fullWidth verticalGap={10}>
                {step !== OfferSteps.imei && <Progress />}
                {getContent()}
                </Container.Flex>
            </Card>
        </Container.Flex>
    );
};

export default Offer;
