import { useState } from "react";
import { useOfferData } from "../hooks/useOfferData";
import { Button, Container } from "../../ui";
import Input from "../../ui/Input";
import { OfferQuestionProps } from "./OfferQuestion";
import { GivenAnswer } from "../../../store/offerSlice/types";
import { collectAnswerData } from "../helpers/collectAnswerData";


const FreeInput = (props: OfferQuestionProps ) => {

    const { giveAnswer } = useOfferData();

    const [value, setValue] = useState("");

    const { questionData, combinationId } = props;

    const onClick = () => {
        giveAnswer(collectAnswerData(questionData, value), combinationId )
    }

    return (
        <Container.Flex fullWidth direction="row" justify="between" wrapped gap={16} alignItems="center">
            <Input value={value} onChange={e => setValue(e.target.value)} fullWidth />

            <Button fullWidth onClick={onClick}>
                Проверить
            </Button>
        </Container.Flex>
    )
};

export default FreeInput;
