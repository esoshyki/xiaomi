import { Button, Img, Container } from "../../ui";
import { OfferQuestionProps } from "./OfferQuestion";
import { useOfferData } from "../../../hooks/useOfferData";
import { collectAnswerData } from "../helpers/collectAnswerData";
import { useUploadFiles } from "../../../contexts/uploadFiles";
import { styled } from "../../../helpers/styled";
import { useState } from "react";
import UploadProgress from "../../ui/UploadProgress";

const UploadProgressText = styled.span`
	color: ${(props) => props.theme.colors.link.default};
	font-weight: 600;
	font-size: 17px;
	line-height: 20px;
`;

const UploadImage = (props: OfferQuestionProps) => {
    const { questionData } = props;
    const { giveAnswer } = useOfferData();

    const onFileInput = (file: File) => {
        if (typeof window !== "undefined") {
            const localURL = window.URL.createObjectURL(file);
            giveAnswer(collectAnswerData(questionData, localURL));
            setLoaded(1);
        }
    };

    const [loaded, setLoaded] = useState(0);

    return (
        <>
            <Button
                fileInput
                onFileInput={onFileInput}
                icon="photo"
                variant="outline"
                fullWidth
            >
                {questionData.questionInputButtonName ||
                    "Выбрать/сделать фото".toUpperCase()}
            </Button>
            {
                !!loaded && <UploadProgress loadedLength={loaded}/>
            }

        </>
    );
};

export default UploadImage;
