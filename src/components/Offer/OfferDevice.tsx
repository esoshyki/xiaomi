import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import { GivenAnswer, PhoneInfo } from "../../store/offerSlice/types";
import { Container, Image, Typography } from "../ui";

const OfferDevice = ({ phone }: { phone: PhoneInfo }) => {
    const { IMEI, givenAnswers } = useOfferData();

    const prettier = (ans: GivenAnswer) => {
        switch (ans.questionCode) {
            case "obem-pamyati":
                return ans.answerName + " Gb";
            default:
                return ans.answerName;
        }
    };

    const GivenAnswers = () => {
        return (
            <Fragment>
                {Object.entries(givenAnswers).map(([k, answers], i) => {
                    return (
                        <Fragment>
                            <Container.Flex
                                direction="row"
                                fullWidth
                                horizontalGap={10}
                                key={k}
                            >
                                {!!answers?.[0].groupShortName && (
                                    <Typography.Tertiary>
                                        {answers?.[0].groupShortName ?? ""}
                                    </Typography.Tertiary>
                                )}

                                <Typography.Small>
                                    {answers.map(prettier).join(", ")}
                                </Typography.Small>
                            </Container.Flex>
                            {i === 0 && (
                                <Container.Flex
                                    direction="row"
                                    fullWidth
                                    horizontalGap={10}
                                >
                                    <Typography.Tertiary>
                                        IMEI
                                    </Typography.Tertiary>
                                    <Typography.Small>{IMEI}</Typography.Small>
                                </Container.Flex>
                            )}
                        </Fragment>
                    );
                })}
            </Fragment>
        );
    };

    return (
        <Container.Flex
            fullWidth
            direction="row"
            alignItems="start"
            horizontalGap={10}
            justify="start"
        >
            <Image src={phone.IMAGE} alt={phone.NAME} height={100} />
            <Container.Flex verticalGap={2}>
                <Typography.Title>{phone.NAME}</Typography.Title>
                <GivenAnswers />
            </Container.Flex>
        </Container.Flex>
    );
};

export default OfferDevice;
