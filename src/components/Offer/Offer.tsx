import { OfferStep } from ".";
import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import { Progress, Card, Info, Typography, Button } from "../ui";
import { memo, useEffect, useRef, useState } from "react";
import OfferDevice from "./OfferDevice";
import AddNewDevice from "../AddNewDevice";
import { resetCheckout } from "../../store/userSlice";

const Offer = () => {
    const { step, phone } = useOfferData();

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
    });

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
            case "preliminary":
                return <OfferStep.Preliminary />
            default:
                return null
        }
    };

    return (
        <Container.Flex
            gap={32}
            fullWidth
            fullHeight
            direction="row"
            alignItems="stretch"
            /*styles={{transition: "all 200ms ease-in" }}*/
            breakpoints={{
                660: {
                    flexDirection: "column",
                    alignItems: "center"
                },
            }}
        >
            {step === "imei" &&
            <Card
                ref={hintRef}
                isHidden={!hint || undefined}
                padding="50px 30px"
                animateHeight={cardHeight !== "auto"}
                animateWidth={cardWidth !== "auto"}
                styles={{maxWidth: "344px", height: cardHeight, width: cardWidth}}
            >
                    <Info>
                        За 2 минуты рассчитайте скидку на покупку у 
                        <Typography.Link>партнёров</Typography.Link>, взамен
                        на ваш старый смартфон
                    </Info>
                    <Button variant="outline" fullWidth uppercase styles={{marginTop: "16px"}}>
                        Подробнее
                    </Button>
            </Card>}

            <Card padding="28px" styles={{maxWidth: "344px"}}>
                {step !== "imei" && <Progress />}
                {phone?.[0] && <OfferDevice phone={phone[0]} />}
                {getContent()}
            </Card>

            {step === "pending" && <AddNewDevice />}
        </Container.Flex>
    );
};

export default memo(Offer);
