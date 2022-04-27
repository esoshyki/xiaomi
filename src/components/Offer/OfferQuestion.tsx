import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import {
    Question as QuestionType,
} from "../../store/offerSlice/types";
import { isString } from "../../store/types";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Typography from "../ui/Typography";

const questions = {
    memory: {
        id: "42",
        label: "",
    },
};


const OfferQuestion = (
    props: QuestionType & { groupShortName: isString; groupId: number, summary?: true }
) => {
    const {
        questionAnswers,
        questionName,
        questionId,
        questionCode,
        groupShortName,
        groupId,
        summary
    } = props;

    const { giveAnswer, changeAnswer, givenAnswers } = useOfferData();

    const filterAnswerName = (value: string) => {
        switch (questionId) {
            case questions.memory.id:
                return value + " Gb";

            default:
                return value;
        }
    };

    const onAnswer = (answerId: string, answerName: string) => {
        if (typeof groupId === "number") {
            const answer = {
                questionCode,
                questionId,
                answerId,
                answerName,
                groupShortName: groupShortName || "",
            };
            summary ? changeAnswer(groupId, answer) : giveAnswer(groupId, answer);
        }
    };

    const isChosen = (answerId: string) => {
        if (!summary) return false;
        const ans = givenAnswers[groupId]?.find(a => a.questionId === questionId);
        if (!ans) return false;

        return ans.answerId === answerId
    }

    return (
        <Fragment>
            <Typography.Main>{questionName}</Typography.Main>

            <Container.Flex direction="row" gap={10} wrapped>
                {questionAnswers &&
                    questionAnswers.map((question) => {
                        return (
                            <Button
                                onClick={() =>
                                    onAnswer(
                                        question.answerId,
                                        question.answerName
                                    )
                                }
                                variant={isChosen(question.answerId) ? "primary" : "outline"}
                                styles={{
                                    width: "120px",
                                    height: "40px",
                                }}
                            >
                                {filterAnswerName(question.answerName)}
                            </Button>
                        );
                    })}
            </Container.Flex>
        </Fragment>
    );
};

export default OfferQuestion