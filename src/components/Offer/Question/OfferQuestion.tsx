import {
    Question,
} from "../../../store/offerSlice/types";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import FreeInput from "./FreeInput";
import FromList from "./FromList";

export type QuestionData = Question & {
    questionId: number
    combinationId?: string
}

const OfferQuestion = (
    props: QuestionData
) => {

    const { answerType, questionName } = props;

     return (
        <Container.Flex fullWidth alignItems="start" verticalGap={10}>
            <Typography.Title textAlign="start">{questionName}</Typography.Title>
            {answerType !== "free_input" && <FromList {...props} />}
            {answerType === "free_input" && <FreeInput {...props} />}
        </Container.Flex>
    );
};

export default OfferQuestion