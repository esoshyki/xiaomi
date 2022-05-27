import { ReactNode } from "react";
import { Container } from "../ui";
import OfferCard from "./OfferCard";

const OfferLayout = ({
    children,
    isLoading,
    progress,
    onClick,
}: {
    children: ReactNode;
    isLoading: boolean;
    progress: number;
    onClick: () => void;
}) => {
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
                progress={progress}
                isLoading={isLoading}
                onClick={onClick}
            >
                {children}
            </OfferCard>
        </Container.Flex>
    );
};

export default OfferLayout;
