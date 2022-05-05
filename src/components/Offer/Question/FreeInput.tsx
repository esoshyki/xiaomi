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
        <Container.Flex fullWidth direction="row" justify="between" wrapped gap={10} alignItems="center">
            <Input value={value} onChange={e => setValue(e.target.value)} fullWidth />

            <Button styles={{ width: "120px", height: "40px" }}  onClick={onClick}>
                Поиск
            </Button>
        </Container.Flex>
    )
};

export default FreeInput;
