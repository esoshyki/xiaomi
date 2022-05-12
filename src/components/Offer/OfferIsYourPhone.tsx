import { useOfferData } from "./hooks/useOfferData";
import Confirm from "../ui/Confirm";
import Typography from "../ui/Typography";
import { Fragment } from "react";

enum Content {
    isYourDevice = "Это ваше устройство?",
}

const OfferIsYourPhone = () => {
    // const { phone, getQuestions, changeStep, errors } = useOfferData();

    return (
        <Fragment>
            {/* {phone && (
                <Confirm
                    onNo={() => {
                        changeStep("imei");
                    }}
                    onYes={() => getQuestions(phone[0].ID)}
                    question={Content.isYourDevice}
                ></Confirm>
            )}
            {!!errors.length && (
                <Typography.Error>{errors.join(". ")}</Typography.Error>
            )} */}
        </Fragment>
    );
};

export default OfferIsYourPhone;
