import { memo } from "react";
import { useTheme } from "styled-components";
import { Question } from "../../../store/offerSlice/types";
import { Box, Button, Info } from "../../ui";
import Container from "../../ui/Container";
import Typography from "../../ui/Typography";
import { useOfferData } from "../hooks/useOfferData";
import FreeInput from "./FreeInput";
import FromList from "./FromList";
import QrCode from "./OfferQR";
import UploadImage from "./UploadImage";
import { TitleSecondary } from "../../ui/Typography/components";

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
        <Container.Flex fullWidth alignItems="start" verticalGap={16} >
            {!!questionHeader && (
                <Typography.TitleSecondary textAlign={"start"}
                    styles={{paddingLeft: "4px", paddingRight: "4px", margin: "0 0 8px"}}
                >
                    {questionHeader}
                </Typography.TitleSecondary>
            )}

            {!!questionDescription && (
                <Typography.Main textAlign="start" styles={{paddingLeft: "4px", paddingRight: "4px", margin: "0 0 4px"}}>
                    {questionDescription}
                    {!!questionDescriptionUrl &&
                        !!questionDescriptionUrlName && (
                        <Typography.Link href={questionDescriptionUrl} target="_blank" styles={{borderBottom: "1px solid currentColor", marginLeft: "3px"}}>
                            {questionDescriptionUrlName}
                        </Typography.Link>
                        )}
                </Typography.Main>
            )}

            {questionName && <Typography.Main
                textAlign="start"
                styles={{paddingLeft: "4px", paddingRight: "4px", margin: "0 0 6px"}}
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
                <Box styles={{ marginTop: "4px" }}>
                    <Info>{questionHelp}</Info>
                </Box>
            )}

            {answerType === "show_qr_link" &&
                <Button
                    fullWidth
                    variant="outline"
                >
                    Назад
                </Button>
            }

            {answerType === "upload_image" && <UploadImage {...props} />}
        </Container.Flex>
    );
};

export default memo(OfferQuestion);
