import { Fragment } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import { Container, Image, Typography } from "../ui";

const OfferDevice = ({ phone }: { phone: any }) => {

    const GivenAnswers = () => {
        return (
            <Fragment>

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
