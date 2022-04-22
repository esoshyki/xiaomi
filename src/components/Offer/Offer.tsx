import { OfferStep } from ".";
import { useOfferData } from "../../hooks/useOfferData";

const Offer = () => {

    const { step } = useOfferData();

    switch (step) {

        default:
            return <OfferStep.Imei />
    }
}

export default Offer