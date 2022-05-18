import { useEffect, useMemo, useState } from "react";
import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Button, Typography } from "../ui";

const OfferQuestions = () => {

    const { getNextQuestion, getQuestions, givenAnswers, questionsTree, fetchQuestions, changeStep } = useOfferData();
    const { errors } = getQuestions;

    const question = useMemo(getNextQuestion, [givenAnswers, questionsTree]);

    useEffect(() => {
        if (!question) {
            fetchQuestions()
        }
    }, [question]);

    return (
        <Container.Flex fullWidth fullHeight>
            {!!question && <OfferQuestion questionData={question} />}
            {!!errors.length && (
                <Typography.Error>
                    {errors.map(err => err.message).join(". ")}
                </Typography.Error>)}
        </Container.Flex>
    );
};

export default OfferQuestions;
