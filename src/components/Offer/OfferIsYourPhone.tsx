import { useOfferData } from "../../hooks/useOfferData";
import { OfferSteps } from "../../store/offerSlice/types";
import Confirm from "../ui/Confirm";
import Container from "../ui/Container";
import Typography from "../ui/Typography";
import Image from "../ui/Image";
import { Fragment } from "react";

enum Content {
    isYourDevice = "Это ваше устройство?",
}

const OfferIsYourPhone = () => {
    const { phone, getQuestions, changeStep, errors, IMEI } = useOfferData();

    return (
        <Fragment>
            {phone && (
                <Container.Flex fullWidth direction="row">
                    <Image
                        src={phone[0].IMAGE}
                        alt={phone[0].NAME}
                        height={100}
                    />
                    <Container.Flex>
                        <Typography.Title>{phone[0].NAME}</Typography.Title>
                        <Container.Flex direction="row" fullWidth>
                            <Typography.Tertiary>IMEI</Typography.Tertiary>
                            <Typography.Small>{IMEI}</Typography.Small>
                        </Container.Flex>
                    </Container.Flex>
                </Container.Flex>
            )}
            {phone && (
                <Confirm
                    onNo={() => {
                        changeStep(OfferSteps.imei);
                    }}
                    onYes={() => getQuestions(phone[0].ID)}
                    question={Content.isYourDevice}
                ></Confirm>
            )}
            {!!errors.length && (
                <Typography.Error>{errors.join(". ")}</Typography.Error>
            )}
        </Fragment>
    );
};

export default OfferIsYourPhone;
