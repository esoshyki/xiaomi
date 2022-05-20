import { memo } from "react";
import { useTheme } from "styled-components";
import { Question } from "../../../store/offerSlice/types";
import { Box, Info } from "../../ui";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import { useOfferData } from "../hooks/useOfferData";
import FreeInput from "./FreeInput";
import FromList from "./FromList";
import QrCode from "./OfferQR";
import UploadImage from "./UploadImage";

export interface OfferQuestionProps {
    questionData: Question;
    combinationId?: string;
}

const OfferQuestion = (props: OfferQuestionProps) => {
    const { givenAnswers } = useOfferData();
    const { combinationId } = givenAnswers;

    const theme = useTheme()

    const { questionData } = props;
    const {
        answerType,
        questionName,
        questionDescription,
        questionHelp,
        questionHeader,
        questionDescriptionUrl,
        questionDescriptionUrlName,
    } = questionData;

    console.log(questionData)

    return (
        <Container.Flex fullWidth alignItems="start" verticalGap={16} margin={"16px 0 0 0"}>
            {!!questionHeader && (
                <Typography.Title
                    color={theme.colors.text.secondary}
                    margin={0}
                >
                    {questionHeader}
                </Typography.Title>
            )}

            {!!questionDescription && (
                <Typography.Main textAlign="start" margin={"8px 0 20px 0"} >
                    {questionDescription}
                    {!!questionDescriptionUrl &&
                        !!questionDescriptionUrlName && (
                            <Typography.Link href={questionDescriptionUrl} target="_blank">
                                {questionDescriptionUrlName}
                            </Typography.Link>
                        )}
                </Typography.Main>
            )}

            {questionName && <Typography.Main
                textAlign="start"
                margin={0}
            >
                {questionName}
            </Typography.Main>}
            
            {answerType !== "free_input" && (
                <FromList {...props} combinationId={combinationId} />
            )}
            {answerType === "free_input" && (
                <FreeInput {...props} combinationId={combinationId} />
            )}

            {answerType === "show_qr_link" && <QrCode />}

            {!!questionHelp && (
                <Box styles={{ marginTop: "5px" }}>
                    <Info>{questionHelp}</Info>
                </Box>
            )}

            {answerType === "upload_image" && <UploadImage {...props} />}
        </Container.Flex>
    );
};

export default memo(OfferQuestion);
