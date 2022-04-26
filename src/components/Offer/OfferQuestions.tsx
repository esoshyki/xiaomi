import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import {
    Question as QuestionType,
    QuestionGroup as QuestionGroupType,
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

const Question = (
    props: QuestionType & { groupShortName: isString; groupId: number }
) => {
    const {
        questionAnswers,
        questionName,
        questionId,
        questionCode,
        groupShortName,
        groupId,
    } = props;

    const { giveAnswer } = useOfferData();

    const filterAnswerName = (value: string) => {
        switch (questionId) {
            case questions.memory.id:
                return value + " Gb";

            default:
                return value;
        }
    };

    const onAnswer = (answerId: string) => {
        console.log(groupId);
        if (typeof groupId === "number") {
            giveAnswer(groupId, {
                questionCode,
                questionId,
                answerId,
                groupShortName: groupShortName || "",
            });
        }
    };

    return (
        <Fragment>
            <Typography.Main>{questionName}</Typography.Main>

            <Container.Flex direction="row" gap={10} wrapped>
                {questionAnswers &&
                    questionAnswers.map((question) => {
                        return (
                            <Button
                                onClick={() => onAnswer(question.answerId)}
                                variant="outline"
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

const QuestionGroup = (props: QuestionGroupType & { groupId: number }) => {
    const { groupName, questions, groupShortName, groupId } = props;

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
                        <Question
                            {...question}
                            groupShortName={groupShortName}
                            groupId={groupId}
                        />
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
                    <QuestionGroup
                        {...questions[currentQuestionGroup]}
                        groupId={currentQuestionGroup || 0}
                    />
                )}
        </Container.Flex>
    );
};

export default OfferQuestions;
