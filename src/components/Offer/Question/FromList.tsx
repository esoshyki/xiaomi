import { useOfferData } from "../../../hooks/useOfferData";
import { Button, Container } from "../../ui";
import { OfferQuestionProps } from "./OfferQuestion";
import { collectAnswerData } from "../helpers/collectAnswerData";

const FromList = (props: OfferQuestionProps) => {
    const { giveAnswer } = useOfferData();

    const { questionData } = props;
    const { answers, validator } = questionData;

    const onClick = (answerName: string, answerId: string) => {
        giveAnswer(
            collectAnswerData(questionData,answerName, answerId),
        );
    };


    return (
        <>
            {!!answers &&
                <Container.Flex
                    fullWidth
                    direction="row"
                    justify="between"
                    wrapped
                    gap={16}
                    alignItems="center"
                >
                    {Object.entries(answers).map(([answerId, answer], idx) => {
                        const { answerName } = answer;
                        return (
                            <Button
                                styles={{ width: "calc(50% - 8px)" }}
                                key={idx}
                                variant="outline"
                                onClick={() => onClick(answerName, answerId)}
                            >
                                {answerName}
                            </Button>
                        );
                    })}
                </Container.Flex>
            }
        </>
    );
};

export default FromList;
