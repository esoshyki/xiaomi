import { useOfferData } from "../../hooks/useOfferData";
import { Button, Container, Typography } from "../ui";
import OfferQuestion from "./OfferQuestion";
import { memo } from "react";

const OfferSummary = () => {
    const { givenAnswers, questions } = useOfferData();

    const shouldDisplay = (
        displayConditionQuestion?: string,
        displayConditionAnswers?: string[]
    ) => {
        if (!displayConditionQuestion || !displayConditionAnswers) return true;
        if (displayConditionAnswers && displayConditionQuestion) {
            return Object.values(givenAnswers).some((questions) =>
                questions.some(
                    (question) =>
                        question.questionId === displayConditionQuestion &&
                        displayConditionAnswers.includes(question.answerId)
                )
            );
        }
    };

    const onlyQuestions = (
        questions
            ? questions.map((question, id) =>
                  question.questions.map((q) => ({
                      ...q,
                      groupId: id,
                      groupShorName: question.groupShortName,
                  }))
              )
            : []
    )
        .reduce((acc, cur) => [...acc, ...cur], [])
        .filter((el) =>
            shouldDisplay(
                el.displayConditionQuestion,
                el.displayConditionAnswers
            )
        );

    console.log(onlyQuestions);

    return (
        <Container.Flex>
            {onlyQuestions.map((question) => (
                <OfferQuestion
                    {...question}
                    groupId={question.groupId}
                    groupShortName={question.groupShorName}
                    summary={true}
                />
            ))}

            <Container.Flex fullWidth>
                <Typography.Main>Сохранить изменения?</Typography.Main>

                <Container.Flex
                    fullWidth
                    wrapped
                    direction="row"
                    justify="around"
                >
                    <Button
                        variant="danger"
                        styles={{ width: "120px", height: "40px" }}
                    >
                        Отмена
                    </Button>
                    <Button styles={{ width: "120px", height: "40px" }}>
                        Сохранить
                    </Button>
                </Container.Flex>
            </Container.Flex>
        </Container.Flex>
    );
};

export default memo(OfferSummary);
