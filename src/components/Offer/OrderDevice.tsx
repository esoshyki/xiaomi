import { Fragment, memo, useEffect, useMemo, useRef, useState } from "react";
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

const OfferDevice = ({ data, hidingChars }: { data: OrderItem, hidingChars?: boolean | undefined }) => {
    const { image, name, answers, status } = data;

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
                <Image
                    noBasePath
                    src={
                        image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfmJ3BEREy2MsQ6xLonMfa49OMmYlqFCLEg&usqp=CAU"
                    }
                    alt={name}
                    height={75}
                    styles={{
                        maxWidth: "75px",
                        maxHeight: "75px",
                    }}
                />
            </ImgWrapper>

            <Container.Flex verticalGap={4} alignItems="stretch" styles={{flexGrow: 1}}>
                <Typography.Title
                    textAlign="start"
                    styles={{ order: 0, margin: "0" }}
                >
                    {name}
                </Typography.Title>
                <Container.Flex
                    ref={cardRef}
                    verticalGap={4}
                    alignItems="stretch"
                    styles={{overflow: "hidden", transition: "height 250ms"}}>
                    {answers.map((ans, key) => (
                        <Container.Flex direction="row" key={key}>
                            {ans.name && <Typography.Tertiary margin={"0 4px 0 0"}>
                                {ans.name}
                            </Typography.Tertiary>}
                            <Typography.Small>{ans.value}</Typography.Small>
                        </Container.Flex>
                    ))}
                </Container.Flex>
                {
                    hidingChars &&
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
        </Container.Flex>
    );
};

export default memo(OfferDevice);
