import { Card, Container, Progress, Typography } from "../ui";
import OfferLoader from "./OfferLoader";
import { ReactNode, useMemo, useRef } from "react";

interface OfferCardProps {
    children: ReactNode;
    setHint?: (value: boolean) => void;
    progress: number;
    isLoading: boolean;
}

const OfferCard = ({
    setHint,
    children,
    progress,
    isLoading,
}: OfferCardProps) => {

    const cardRef = useRef<HTMLDivElement>(null);

    const height = useMemo(() => {
        if (cardRef.current) {
            return cardRef.current.offsetHeight
        }
    }, [children])
   
    return (
        <Card
            ref={cardRef}
            padding="28px"
            fullWidth
            onClick={() => {
                setHint && setHint(false);
            }}
            styles={{
                height: height ? `${height}px` : "auto"
            }}
        >
            <Container.Flex fullWidth fullHeight styles={{
                opacity: isLoading ? "0" : "1",
                transition: "200ms ease-in"
            }}>
                <Progress progress={progress} />

                {children}
            </Container.Flex>

            {isLoading && <Container.Flex justify="center" fullWidth fullHeight styles={{
                top: 0,
                left: 0,
                position: "absolute",
                zIndex: "5"
            }}>
                <OfferLoader />
            </Container.Flex>}
        </Card>
    );
};

export default OfferCard;
