import { useEffect, useMemo } from "react";
import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Typography } from "../ui";
import { Question, ServerError } from "../../store/offerSlice/types";


const OfferQuestions = () => {

    const { errors, getQuestion, givenAnswers, getQuestions, questionsTree } = useOfferData();

    const question = useMemo(getQuestion, [givenAnswers, questionsTree]);

    useEffect(() => {
        if (!question) {
            getQuestions()
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
