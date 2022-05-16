import { useState } from "react";
import { useOfferData } from "../hooks/useOfferData";
import { Button, Container } from "../../ui";
import Input from "../../ui/Input";
import { OfferQuestionProps } from "./OfferQuestion";
import { GivenAnswer } from "../../../store/offerSlice/types";
import { collectAnswerData } from "../helpers/collectAnswerData";


const FreeInput = (props: OfferQuestionProps ) => {

    const { giveAnswer } = useOfferData();

    const [value, setValue] = useState("350320523229662");

    const { questionData } = props;

    const onClick = () => {
        giveAnswer(collectAnswerData(questionData, value))
    }

    return (
        <Container.Flex fullWidth gap={16} alignItems="center">
            <Input value={value} onChange={e => setValue(e.target.value)} fullWidth />

            <Button fullWidth onClick={onClick}>
                Проверить
            </Button>
        </Container.Flex>
    )
};

export default FreeInput;
