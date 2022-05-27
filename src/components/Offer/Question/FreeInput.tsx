import { useState } from "react";
import { useOfferData } from "../../../hooks/useOfferData";
import { Button, Container, Typography } from "../../ui";
import Input from "../../ui/Input";
import { OfferQuestionProps } from "./OfferQuestion";
import { collectAnswerData } from "../helpers/collectAnswerData";

const IMEIvalidator = `^\\d{15}$`;
const IMEIvalidateError = "Неправильный формат IMEI";


const FreeInput = (props: OfferQuestionProps ) => {

    const { giveAnswer } = props;

    const [value, setValue] = useState("350320523229662");
    const [failure, setFailure] = useState("");

    const { questionData } = props;
    const { validator, validateFailure, questionInputButtonName, questionInputPlaceholder } = questionData;

    const validate = () => {
        return new RegExp(validator ?? IMEIvalidator).test(value)
    }

    const onClick = () => {
        if (validate()) {
            giveAnswer(collectAnswerData(questionData, value))
        } else {
            setFailure(validateFailure ?? IMEIvalidateError)
        }
    }

    const onChange = (e: any) => {
        setValue(e.target.value);
        setFailure("")
    }

    return (
        <Container.Flex fullWidth gap={16} alignItems="center">
            <Input value={value} onChange={onChange} fullWidth placeholder={questionInputPlaceholder || ""}/>

            {failure && <Typography.Error>
                    {failure}
                </Typography.Error>}

            <Button fullWidth onClick={onClick}>
                {questionInputButtonName ?? "ОК"}
            </Button>
        </Container.Flex>
    )
};

export default FreeInput;
