import styled from "styled-components";
import { OfferStep } from ".";
import { useOfferData } from "../../hooks/useOfferData";
import { OfferSteps } from "../../store/offerSlice/types";
import Container from "../ui/Container";

const OfferWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const Offer = () => {
    const { step } = useOfferData();

    const getContent = () => {
        switch (step) {
            case OfferSteps.imei:
                return <OfferStep.Imei />;
            case OfferSteps.isYourPhone:
                return <OfferStep.IsYourPhone />;
            case OfferSteps.questions:
                return <OfferStep.Questions />

            default:
                return <OfferStep.Imei />;
        }
    };

    return (
        <OfferWrapper>
            <Container.Flex fullHeight fullWidth styles={{ maxWidth: "700px", padding: "20px" }}>
                        {getContent()}
            </Container.Flex>
        </OfferWrapper>
    );
};

export default Offer;
