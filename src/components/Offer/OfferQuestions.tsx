import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import {
    QuestionGroup as QuestionGroupType,
} from "../../store/offerSlice/types";
import Container from "../ui/Container";
import Typography from "../ui/Typography";
import OfferQuestion from "./OfferQuestion";

const QuestionGroup = (props: QuestionGroupType & { groupId: number }) => {
    const { groupName, questions, groupShortName, groupId } = props;

    const { currentQuestion } = useOfferData();

    const question =
        typeof currentQuestion === "number" ? questions[currentQuestion] : null;

    return (
        <Container.Flex fullHeight fullWidth>
            <Typography.Main>{groupName || ""}</Typography.Main>
            <Fragment>
                {!!question && (
                    <OfferQuestion
                        {...question}
                        groupShortName={groupShortName}
                        groupId={groupId}
                    />
                )}
            </Fragment>
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
