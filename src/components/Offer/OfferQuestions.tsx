import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Button, Typography } from "../ui";
import {
    GivenAnswers,
    Question,
    ServerError,
} from "../../store/offerSlice/types";

interface OfferQuestionsProps {
    question: Question | null;
    errors: ServerError[];
    changeContent: boolean;
    givenAnswers: GivenAnswers;
}

const OfferQuestions = ({
    question,
    errors,
    changeContent,
    givenAnswers,
}: OfferQuestionsProps) => {

    return (
        <Container.Flex
            fullWidth
            fullHeight
            styles={{
                transition: "opacity 200ms ease-in",
                opacity: changeContent ? 0 : 1,
            }}
        >
            {!!question && (
                <OfferQuestion
                    questionData={question}
                    givenAnswers={givenAnswers}
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
