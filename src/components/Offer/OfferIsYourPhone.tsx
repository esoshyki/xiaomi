import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import { OfferSteps } from "../../store/offerSlice/types";
import Confirm from "../ui/Confirm";
import Container from "../ui/Container";
import Typography from "../ui/Typography";

enum Content {
    isYourDevice = "Это ваше устройство?",
}

const OfferIsYourPhone = () => {
    const { phone, getQuestions, changeStep, errors } = useOfferData();

    return (
        <Container.Grid fullWidth fullHeight rows="auto auto auto" cols="1fr" gap={10}>
            {phone && <Typography.H3>{phone[0].NAME}</Typography.H3>}
            {phone && (
                <Confirm
                    onNo={() => {changeStep(OfferSteps.imei)}}
                    onYes={() => getQuestions(phone[0].ID)}
                    question={Content.isYourDevice}
                ></Confirm>
            )}
            {!!errors.length && <Typography.Error>{errors.join(". ")}</Typography.Error>}
        </Container.Grid>
    );
};

export default OfferIsYourPhone;
