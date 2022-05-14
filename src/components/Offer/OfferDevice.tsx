import { Fragment, memo, useMemo } from "react";
import { Container, Image, Typography } from "../ui";
import styled from "styled-components/macro";
import { DeviceInfo, GivenAnswer } from "../../store/offerSlice/types";
import { getDeviceData } from "./helpers/getDeviceData";

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 87px;
	height: 87px;
	border-radius: 12px;
    background-color: white;
`;

const OfferDevice = ({ deviceInfo, givenAnswers }: { deviceInfo: DeviceInfo, givenAnswers: GivenAnswer[] }) => {

    const { deviceImage, deviceName } = deviceInfo;

    const categories = useMemo(() => getDeviceData(givenAnswers), [givenAnswers])

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
                {Object.entries(categories).map(([groupName, value], key) => (
                    <Container.Flex direction="row" key={key}>
                        <Typography.Tertiary margin={"0 4px 0 0"}>{groupName}</Typography.Tertiary>
                        <Typography.Small>{value}</Typography.Small>
                    </Container.Flex>
                ))}
            </Container.Flex>
        </Container.Flex>
    );
};

export default memo(OfferDevice);
