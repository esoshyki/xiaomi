import { Fragment, memo } from "react";
import { useOfferData } from "./hooks/useOfferData";
import { Container, Image, Typography } from "../ui";
import styled from "styled-components/macro";
import { animateTime } from "../../hooks/useMenu";
import { DeviceInfo } from "../../store/offerSlice/types";
import { N } from "../../store/types";
import { getFullImageHref } from "./helpers/getFullImageHref";

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 87px;
	height: 87px;

	border-radius: 12px;
    background-color: white;
`;

const OfferDevice = ({ deviceInfo }: { deviceInfo: DeviceInfo }) => {

    const { deviceID, deviceImage, deviceName } = deviceInfo;

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
                <Image src={deviceImage} alt={deviceName} height={75} styles={{
                    maxWidth: "75px",
                    maxHeight: "75px"
                }}/>
            </ImgWrapper>
            <Container.Flex verticalGap={2} alignItems="stretch">
                <Typography.Title textAlign="start" styles={{ order: 0, margin: "0 0 4px" }}>{deviceName}</Typography.Title>
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

export default memo(OfferDevice);
