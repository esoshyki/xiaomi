import { useState } from "react";
import { useOfferData } from "../../../hooks/useOfferData";
import { Button, Container } from "../../ui";
import Input from "../../ui/Input";
import { QuestionData } from "./OfferQuestion";

const FreeInput = (props: QuestionData ) => {

    const { giveAnswer } = useOfferData();

    const [value, setValue] = useState("");

    const { questionId, combinationId } = props;

    const onClick = () => {
        giveAnswer(questionId,value, combinationId )
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
