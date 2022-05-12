import { Fragment } from "react";
import { useOfferData } from "./hooks/useOfferData";
import { Container, Image, Typography } from "../ui";
import styled from "styled-components/macro";
import { animateTime } from "../../hooks/useMenu";

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 87px;
	height: 87px;

	border-radius: 12px;
    background-color: white;
`;

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
            horizontalGap={16}
            justify="start"
        >
            <ImgWrapper>
                <Image src={phone.IMAGE} alt={phone.NAME} height={75} styles={{
                    maxWidth: "75px",
                    maxHeight: "75px"
                }}/>
            </ImgWrapper>
            <Container.Flex verticalGap={2} alignItems="stretch">
                <Typography.Title textAlign="start" styles={{ order: 0, margin: "0 0 4px" }}>{phone.NAME}</Typography.Title>
                <GivenAnswers />
                <Container.Flex
                    direction="row"
                    fullWidth
                    horizontalGap={10}
                    styles={{order: 2}}
                >
                    <Typography.Tertiary>
                        IMEI
                    </Typography.Tertiary>
                    {/* <Typography.Small>{IMEI}</Typography.Small> */}
                </Container.Flex>
            </Container.Flex>
        </Container.Flex>
    );
};

export default OfferDevice;
