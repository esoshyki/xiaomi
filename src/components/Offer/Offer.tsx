import { useSelector } from "react-redux";
import { OfferStep } from ".";
import { select } from "../../store/selector";

const Offer = () => {

    const { step } = useSelector(select.offer)

    switch (step) {

        default:
            return <OfferStep.Imei />
    }
}

export default Offer