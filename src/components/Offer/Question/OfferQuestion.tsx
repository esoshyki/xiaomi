import { Question } from "../../../store/offerSlice/types";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import { useOfferData } from "../hooks/useOfferData";
import FreeInput from "./FreeInput";
import FromList from "./FromList";

export interface OfferQuestionProps {
    questionData: Question
    combinationId?: string
}

const OfferQuestion = (props: OfferQuestionProps) => {

    const { givenAnswers } = useOfferData();
    const { currentCombinationId } = givenAnswers;

    const { questionData } = props;
    const { answerType, questionName } = questionData;

    return (
        <Container.Flex fullWidth alignItems="start" verticalGap={16}>
            <Typography.Main
                textAlign="start"
                styles={{ marginBottom: "6px", marginTop: "0" }}
            >
                {questionName}
            </Typography.Main>
            {answerType !== "free_input" && (
                <FromList {...props} combinationId={currentCombinationId} />
            )}
            {answerType === "free_input" && (
                <FreeInput {...props} combinationId={currentCombinationId} />
            )}
        </Container.Flex>
    );
};

export default OfferQuestion;
