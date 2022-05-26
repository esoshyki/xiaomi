import { Card, Container, Progress, Typography } from "../ui";
import OfferLoader from "./OfferLoader";
import { ReactNode, useCallback, useMemo, useRef } from "react";

interface OfferCardProps {
    children: ReactNode;
    onClick?: () => void;
    progress: number;
    isLoading: boolean;
}

const OfferCard = ({
    onClick,
    children,
    progress,
    isLoading,
}: OfferCardProps) => {

    const cardRef = useRef<HTMLDivElement>(null);

    const height = useMemo(() => {
        if (cardRef.current) {
            return cardRef.current.offsetHeight
        }
    }, [children]);

    const _onClick = useCallback(() => {
        onClick && onClick()
    }, [])
   
    return (
        <Card
            ref={cardRef}
            padding="28px"
            fullWidth
            onClick={_onClick}
            isQuestion={true}
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
