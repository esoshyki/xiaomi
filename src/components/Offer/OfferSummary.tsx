import { useOfferData } from "../../hooks/useOfferData";
import { Button, Container, Delete, Typography } from "../ui";
import OfferQuestion from "./Question/OfferQuestion";
import { memo, useState } from "react";

const OfferSummary = () => {
    const {  questionsData, restoreOffer, changeStep } = useOfferData();

    const [showDelete, setShowDelete] = useState(false);

    // const onlyQuestions = (
    //     questions
    //         ? questions.map((question, id) =>
    //               question.questions.map((q) => ({
    //                   ...q,
    //                   groupId: id,
    //                   groupShorName: question.groupShortName,
    //               }))
    //           )
    //         : []
    // )
    //     .reduce((acc, cur) => [...acc, ...cur], [])
    //     .filter((el) =>
    //         shouldDisplay(
    //             el.displayConditionQuestion,
    //             el.displayConditionAnswers
    //         )
    //     );

    const nextStep = () => {

    }

    return (
        <Container.Flex fullWidth>
            {/* {onlyQuestions.map((question) => (
                <OfferQuestion
                    {...question}
                    groupId={question.groupId}
                    groupShortName={question.groupShorName}
                    summary={true}
                />
            ))}

            <Container.Flex fullWidth>
                <Typography.Main>Сохранить изменения?</Typography.Main>

                <Container.Flex
                    fullWidth
                    wrapped
                    direction="row"
                    justify="around"
                >
                    <Button
                        variant="danger"
                        styles={{ width: "120px", height: "40px" }}
                        onClick={() => setShowDelete(true)}
                    >
                        Отмена
                    </Button>
                    <Button styles={{ width: "120px", height: "40px" }} onClick={nextStep}>
                        Сохранить
                    </Button>
                </Container.Flex>
            </Container.Flex> */}

            {showDelete && <Delete onDelete={restoreOffer} onCancel={() => setShowDelete(false)}/>}
        </Container.Flex>
    );
};

export default memo(OfferSummary);
