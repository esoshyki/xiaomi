import { Fragment, memo, useMemo } from "react";
import { Container, Image, Typography } from "../ui";
import styled from "styled-components/macro";
import { DeviceInfo, GivenAnswer } from "../../store/offerSlice/types";
import { getDeviceData } from "./helpers/getDeviceData";
import { OrderItem } from "../../store/orderSlice/types";

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 87px;
	height: 87px;
	border-radius: 12px;
    background-color: white;
`;

const OfferDevice = ({ data } : { data: OrderItem }) => {

    const { image, name, answers } = data

    return (
        <Container.Flex
            fullWidth
            direction="row"
            alignItems="start"
            horizontalGap={16}
            justify="start"
            margin={"0 0 16px"}
        >
            <ImgWrapper>
                <Image noBasePath src={image} alt={name} height={75} styles={{
                    maxWidth: "75px",
                    maxHeight: "75px"
                }}/>
            </ImgWrapper>

            <Container.Flex verticalGap={4} alignItems="stretch">
                <Typography.Title textAlign="start" styles={{ order: 0, margin: "0" }}>{name}</Typography.Title>
                {answers.map((ans, key) => (
                    <Container.Flex direction="row" key={key}>
                        <Typography.Tertiary margin={"0 4px 0 0"}>{ans.name}</Typography.Tertiary>
                        <Typography.Small>{ans.value}</Typography.Small>
                    </Container.Flex>
                ))}
            </Container.Flex>
        </Container.Flex>
    );
};

export default memo(OfferDevice);
