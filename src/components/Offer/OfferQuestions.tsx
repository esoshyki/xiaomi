import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useOfferData } from "./hooks/useOfferData";
import Container from "../ui/Container";
import OfferQuestion from "./Question/OfferQuestion";
import { Button, Typography } from "../ui";
import { Question, ServerError } from "../../store/offerSlice/types";

interface OfferQuestionsProps {
    question: Question | null
    errors: ServerError[]
}

const OfferQuestions = ({ question, errors } : OfferQuestionsProps) => {

    const { changeContent } = useOfferData();

    return (
        <Container.Flex fullWidth fullHeight styles={{
            transition: "opacity 200ms ease-in",
            opacity: changeContent ? 0 : 1
        }}>
            {!!question && <OfferQuestion questionData={question} />}
            {!!errors.length && (
                <Typography.Error>
                    {errors.map(err => err.message).join(". ")}
                </Typography.Error>)}
        </Container.Flex>
    );
};

export default OfferQuestions;
