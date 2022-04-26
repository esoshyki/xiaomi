import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import {
    Question as QuestionType,
    QuestionGroup as QuestionGroupType,
} from "../../store/offerSlice/types";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Typography from "../ui/Typography";

const questions = {
    memory: "42",
};

const Question = (props: QuestionType) => {
    const { questionAnswers, questionName, questionId, questionCode } = props;

    const { getAnswer } = useOfferData()

    const filterAnswerName = (value: string) => {
        switch (questionId) {
            case questions.memory:
                return value + " Gb";

            default:
                return value;
        }
    };

    const onAnswer = (answerId: string) => {
        getAnswer({
            questionCode,
            questionId,
            answerId
        })
    }

    return (
        <Fragment>
            <Typography.Main>{questionName}</Typography.Main>

            {questionAnswers &&
                questionAnswers.map((question) => {
                    return (
                        <Button onClick={() => onAnswer(question.answerId)} square variant="outline">
                            {filterAnswerName(question.answerName)}
                        </Button>
                    );
                })}
        </Fragment>
    );
};

const QuestionGroup = (props: QuestionGroupType) => {
    const { groupName, questions } = props;

    const { currentQuestion } = useOfferData();

    const slice =
        typeof currentQuestion === "number"
            ? questions.slice(0, currentQuestion + 1)
            : null;

    return (
        <Container.Flex fullHeight fullWidth>
            <Typography.Main>{groupName || ""}</Typography.Main>

            {slice &&
                slice.map((question, key) => (
                    <Fragment key={"question" + key}>
                        <Question {...question} />
                    </Fragment>
                ))}
        </Container.Flex>
    );
};

const OfferQuestions = () => {
    const { questions, currentQuestionGroup } = useOfferData();

    return (
        <Container.Flex fullWidth fullHeight>
            {!!questions &&
                typeof currentQuestionGroup === "number" &&
                questions.length > 0 && (
                    <QuestionGroup {...questions[currentQuestionGroup]} />
                )}
        </Container.Flex>
    );
};

export default OfferQuestions;
