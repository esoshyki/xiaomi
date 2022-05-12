import { useOfferData } from "../hooks/useOfferData";
import { Button, Container } from "../../ui";
import { QuestionData } from "./OfferQuestion";

const FromList = (props: QuestionData ) => {

    const { giveAnswer } = useOfferData()

    const { answers, questionId, combinationId } = props;

    const onClick = (answerId: number) => {
         giveAnswer(questionId, answerId, combinationId)
    }

    return (
        <Container.Flex fullWidth direction="row" justify="between" wrapped gap={16} alignItems="center">
            {!!answers && Object.entries(answers).map(([answerId, answer], idx) => {
                return (
                    <Button styles={{ width: "calc(50% - 8px)"}} key={idx} variant="outline" onClick={() => onClick(+answerId)}>
                        {/* {answer.answerName} */}
                    </Button>
                )
            })}
        </Container.Flex>
    )
};

export default FromList;
