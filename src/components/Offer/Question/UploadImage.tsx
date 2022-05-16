import { Button } from "../../ui";
import { OfferQuestionProps } from "./OfferQuestion";
import { useOfferData } from "../hooks/useOfferData";
import { collectAnswerData } from "../helpers/collectAnswerData";

const UploadImage = (props: OfferQuestionProps) => {
    const { questionData } = props;
    const { giveAnswer } = useOfferData();

    const onFileInput = (file: File) => {
        if (typeof window !== "undefined") {
            const localURL = window.URL.createObjectURL(file);
            giveAnswer(collectAnswerData(questionData, localURL));
        }
    };

    return (
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
    );
};

export default UploadImage;
