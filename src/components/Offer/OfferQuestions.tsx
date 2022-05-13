import { useMemo } from "react";
import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Typography } from "../ui";

const OfferQuestions = () => {
    const { getQuestion, errors, getQuestions, step, currentGivenAnswers } = useOfferData();

    const question = useMemo(() => {
        if (step === "questions") {
            return getQuestion();
        }
    }, [currentGivenAnswers, step]);

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
