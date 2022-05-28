import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Button, Typography } from "../ui";
import {
    GivenAnswer,
    GivenAnswers,
    Question,
    ServerError,
} from "../../store/offerSlice/types";

interface OfferQuestionsProps {
    question: Question | null
    errors: ServerError[]
    changeContent: boolean
    givenAnswers: GivenAnswers
    giveAnswer: (answer: GivenAnswer) => void
}

const OfferQuestions = ({
    question,
    errors,
    changeContent,
    givenAnswers,
    giveAnswer
}: OfferQuestionsProps) => {

    return (
        <Container.Flex
            fullWidth
            fullHeight
            styles={{
                transition: "opacity 200ms ease-in",
                opacity: changeContent ? 0 : 1,
                marginTop: "16px"
            }}
        >
            {!!question && (
                <OfferQuestion
                    questionData={question}
                    givenAnswers={givenAnswers}
                    giveAnswer={giveAnswer}
                />
            )}
            {!!errors.length && (
                <Typography.Error>
                    {errors.map((err) => err.message).join(". ")}
                </Typography.Error>
            )}
        </Container.Flex>
    );
};

export default OfferQuestions;
