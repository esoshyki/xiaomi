import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion, { QuestionData } from "./Question/OfferQuestion";

const OfferQuestions = () => {
    const { getQuestion, errors, questionsData } = useOfferData();

    const question = getQuestion()


    return (
        <Container.Flex fullWidth fullHeight>
            {!!question && !errors.length && <OfferQuestion {...question}/>}
        </Container.Flex>
    );
};

export default OfferQuestions;
