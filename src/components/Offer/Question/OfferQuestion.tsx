import { memo } from 'react';
import { Question } from "../../../store/offerSlice/types";
import { Info } from '../../ui';
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import { useOfferData } from "../hooks/useOfferData";
import FreeInput from "./FreeInput";
import FromList from "./FromList";
import QrCode from './OfferQR';
import UploadImage from './UploadImage';
import { TitleSecondary } from "../../ui/Typography/components";

export interface OfferQuestionProps {
    questionData: Question
    combinationId?: string
}

const OfferQuestion = (props: OfferQuestionProps) => {

    const { givenAnswers } = useOfferData();
    const { combinationId } = givenAnswers;

    const { questionData } = props;
    const { answerType, questionName, questionDescription } = questionData;

    return (
        <Container.Flex fullWidth alignItems="start" verticalGap={16}>
            {questionData.questionHeader && (
                <Typography.TitleSecondary styles={{margin: "0 0 8px"}} textAlign="start">
                    {questionData.questionHeader}
                </Typography.TitleSecondary>
            )}

            {!!questionName && (
                <Typography.Main
                    textAlign="start"
                    styles={{ marginBottom: "6px", marginTop: "0" }}
                >
                    {questionName}
                </Typography.Main>
            )}
            {answerType !== "free_input" && (
                <FromList {...props} combinationId={combinationId} />
            )}
            {answerType === "free_input" && (
                <FreeInput {...props} combinationId={combinationId} />
            )}

            {answerType === "show_qr_link" && (
                <QrCode />
            )}

            {!!questionDescription && <Info>{questionDescription}</Info>}

            {answerType === "upload_image" && (
                <UploadImage {...props} />
            )}

        </Container.Flex>
    );
};

export default memo(OfferQuestion);
