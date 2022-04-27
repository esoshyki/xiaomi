import { OfferStep } from ".";
import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import { Progress, Card, Info, Typography, Button } from "../ui";
import { useRef, useState } from "react";
import OfferDevice from "./OfferDevice";
import AddNewDevice from "../AddNewDevice";

const Offer = () => {
    const { step, phone } = useOfferData();

    const [hint, setHint] = useState(true);

    const hintRef = useRef<HTMLDivElement>(null);

    const getContent = () => {
        switch (step) {
            case "imei":
                return <OfferStep.Imei hint={hint} setHint={setHint} />;
            case "isYourPhone":
                return <OfferStep.IsYourPhone />;
            case "questions":
                return <OfferStep.Questions />;
            case "summary":
                return <OfferStep.Summary />
            case "cost-confirm":
                return <OfferStep.CostConfirm />
            case "qr-code":
                return <OfferStep.QR />
            case "photo-front":
                return <OfferStep.PhotoFront />
            case "photo-back":
                return <OfferStep.PhotoBack />
            case "pending":
                return <OfferStep.Pending />
            default:
                return null
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
            {step === "imei" && <Card fullWidth ref={hintRef} isHidden={!hint || undefined} >
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
            </Card>}

            <Card fullWidth padding={28} >
                <Container.Flex fullWidth verticalGap={10}>
                {step !== "imei" && <Progress />}
                {phone?.[0] && <OfferDevice phone={phone[0]} />}
                {getContent()}
                </Container.Flex>
            </Card>

            {step === "pending" && <AddNewDevice />}
        </Container.Flex>
    );
};

export default Offer;
