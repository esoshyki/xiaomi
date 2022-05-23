import { Card, Progress, Typography } from "../ui";
import OfferLoader from "./OfferLoader";
import { ReactNode } from "react";

interface OfferCardProps {
    children: ReactNode
    setHint?: (value: boolean) => void,
    progress: number;
    isLoading: boolean
}

const OfferCard = ({ setHint, children, progress, isLoading } : OfferCardProps) => {

    return (
        <Card
        padding="28px"
        fullWidth
        onClick={() => {setHint && setHint(false)}}
        isQuestion={true}

    >
        <Progress progress={progress} />
        
        {children}

        {isLoading && <OfferLoader />}
    </Card>
    )
};

export default OfferCard