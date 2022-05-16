import { useEffect, useMemo } from "react";
import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Typography } from "../ui";
import { Question, ServerError } from "../../store/offerSlice/types";


const OfferQuestions = () => {

    const { getNextQuestion, getQuestions, givenAnswers, questionsTree, fetchQuestions } = useOfferData();
    const { errors } = getQuestions;

    const question = useMemo(getNextQuestion, [givenAnswers, questionsTree]);

    useEffect(() => {
        console.log("here");
        if (!question) {
            fetchQuestions()
        }
    }, [question]);

    return (
        <Container.Flex fullWidth fullHeight>
            {!!question && !errors.length && <OfferQuestion questionData={question} />}
            {!!errors.length && (
                <Typography.Error>
                    {errors.map(err => err.message).join(". ")}
                </Typography.Error>)}
        </Container.Flex>
    );
};

export default OfferQuestions;
