import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";

const OfferQuestions = () => {
    const { getQuestion, errors, getQuestions, step, questionsTree, questionsData, givenAnswers } = useOfferData();

    const question = useMemo(() => {
        if (step === "questions") {
            return getQuestion();
        }
    }, [step, questionsTree, questionsData, givenAnswers.answers]);

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <Container.Flex fullWidth fullHeight>
            {!!question && !errors.length && <OfferQuestion questionData={question} />}
        </Container.Flex>
    );
};

export default OfferQuestions;
