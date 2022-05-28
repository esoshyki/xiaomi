import { Container, Image, Typography } from "../ui";
import styled from "styled-components/macro";
import { useEffect, useMemo, useRef, useState } from "react";
import StatusImage from "../ui/Image/StatusImage";

interface Answer {
    name: string;
    value: string;
}

interface OfferDeviceProps {
    deviceImage: string;
    deviceName: string;
    answers: Answer[];
    price?: number;
    currency?: string;
    hideChars?: true
    status?: string
}

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
	width: 87px;
	height: 87px;
	border-radius: 12px;
    background-color: white;
`;
const ToggleButton = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 0;
    color: ${(props) => props.theme.colors.link.default};
    font-family: inherit;
	font-size: 12px;
	line-height: 16px;
    text-align: right;
    background-color: transparent;
    border: none;
`;

const OfferDevice = (props: OfferDeviceProps) => {
    const { deviceImage, deviceName, answers, price, currency, hideChars, status } = props;
    const [visibleChars, setVisibleChars] = useState(false);
    const [initVisible, setInitVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current && !initVisible) {
            hideChar();
            setInitVisible(true);
        }

    }, [initVisible])

    const showChar = () => {
        if (cardRef.current) {
            if (!visibleChars) {
                cardRef.current.style.height = cardRef.current.scrollHeight + "px";
                setVisibleChars(true);
            }
        }
    }

    const hideChar = () => {
        if (cardRef.current) {
            let children = cardRef.current.children as HTMLCollectionOf<HTMLElement>;
            let gap = 4,
                visibleHeight = 0;
            // calc height of first 2 elems
            for (let i = 0, l = children.length; i < l; i++) {
                if (i === 2) {
                    break
                } else {
                    visibleHeight += children[i].scrollHeight + gap;
                }
            }
            cardRef.current.style.height = visibleHeight + "px";
            setVisibleChars(false);
        }
    }

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
                <Image
                    noBasePath
                    src={deviceImage}
                    alt={deviceName}
                    height={75}
                    styles={{
                        maxWidth: "75px",
                        maxHeight: "75px",
                    }}
                />
            </ImgWrapper>

            <Container.Flex verticalGap={4} alignItems="stretch" styles={{flexGrow: "1"}}>
                <Typography.Title
                    textAlign="start"
                    styles={{ order: 0, margin: "0" }}
                >
                    {deviceName}
                </Typography.Title>

                <Container.Flex
                    ref={cardRef}
                    verticalGap={4}
                    alignItems="stretch"
                    styles={{overflow: "hidden", transition: "height 250ms"}}>

                {answers.map((answer, key) => (
                    <Container.Flex direction="row" key={key}>
                        <Typography.Tertiary margin={"0 4px 0 0"}>
                            {answer.name}
                        </Typography.Tertiary>
                        <Typography.Small>{answer.value}</Typography.Small>
                    </Container.Flex>
                ))}

                </Container.Flex>

                {!!price && !!currency && (
                    <Container.Flex direction={"row"} >
                        <StatusImage status={status === "D" ? "done" : "attention"}/>
                        <Typography.Small>
                            {`${price} ${currency}`}
                        </Typography.Small>
                    </Container.Flex>
                )}

                {
                    hideChars &&
                        <ToggleButton type="button" onClick={() => {
                            if (visibleChars) {
                                hideChar()
                            } else {
                                showChar()
                            }
                        }}>
                            {visibleChars && "Свернуть"}
                            {!visibleChars && "Развернуть"}

                        </ToggleButton>
                }

            </Container.Flex>
            
        </Container.Flex>)
};

export default OfferDevice;
