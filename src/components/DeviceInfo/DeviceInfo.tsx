import { Container, Image, Typography } from "../ui";
import styled from "styled-components/macro";

interface Answer {
    name: string
    value: string
}

interface OfferDeviceProps {
    deviceImage: string
    deviceName: string
    answers: Answer[]
}


const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 87px;
	height: 87px;
	border-radius: 12px;
    background-color: white;
`;

const OfferDevice = (props: OfferDeviceProps) => {

    const { deviceImage, deviceName, answers } = props;

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
                <Image noBasePath src={deviceImage} alt={deviceName} height={75} styles={{
                    maxWidth: "75px",
                    maxHeight: "75px"
                }}/>
            </ImgWrapper>

            <Container.Flex verticalGap={4} alignItems="stretch">
                <Typography.Title textAlign="start" styles={{ order: 0, margin: "0" }}>{deviceName}</Typography.Title>
                {answers.map((answer, key) => (
                    <Container.Flex direction="row" key={key}>
                        <Typography.Tertiary margin={"0 4px 0 0"}>{answer.name}</Typography.Tertiary>
                        <Typography.Small>{answer.value}</Typography.Small>
                    </Container.Flex>
                ))}
            </Container.Flex>
        </Container.Flex>
    );
};

export default OfferDevice
