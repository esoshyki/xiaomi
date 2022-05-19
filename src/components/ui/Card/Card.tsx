import React, { forwardRef, useEffect, useRef, useState } from "react";
import { getCommonProps, Props } from "../../types";
import styled, { keyframes } from "styled-components/macro";
import { fadeInUp } from 'react-animations'

type CardProps = Props<{
    noPadding?: boolean;
    noShadow?: true;
    animateHeight?: boolean;
    animateWidth?: boolean;
    isQuestion?: boolean;
    minHeight?: number;
}>;

const Wrapper = styled.div<CardProps>`
    position: relative;
    border-radius: 20px;
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    height: ${(props) => (props.fullHeight ? "100%" : "auto")};
    max-width: 344px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04);
    transition: all 200ms linear;
    overflow-y: ${(props) => (props.animateHeight ? "hidden" : "auto")};
    overflow-x: ${(props) => (props.animateWidth ? "hidden" : "auto")};
    overflow: hidden;
    ${(props) => getCommonProps(props)};
    padding: 0;
    background-color: ${(props) => props.theme.colors.background.contrast60};
    backdrop-filter: blur(8px);

    & > * {
        opacity: ${(props) => (props.isHidden ? "0" : "1")};
        height: ${(props) => (props.isHidden ? "0" : "auto")};
    }

    @media (min-width: 660px) and (max-width: 768px) {
        max-width: calc(50% - 18px);
    }
    ${(props) => {
        if (props.isHidden) {
            if (props.animateHeight) {
                return {
                    height: 0,
                };
            } else if (props.animateWidth) {
                return {
                    width: 0,
                };
            }
        }
    }}
`;

const hide = keyframes`
    0% {
        filter: opacity(1)
    }
    50% {
        filter: opacity(0)
    }
    100% {
        filter: opacity(1)
    }
`;

const fadeInAnimation = keyframes`${fadeInUp}`

const ContentWrapper = styled.div`
    animation: ${fadeInAnimation} 500ms linear 0s;
    transition: opacity 100ms ease-in;
`;

const Inner = styled.div<{ padding: any }>`
    padding: ${(props) =>
        props.padding
            ? Number.isInteger(props.padding)
                ? `${props.padding}px`
                : props.padding
            : ""};
    border-radius: inherit;
    transition: opacity 200ms;
`;

const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
    const { children, onAnimationEnd, padding, minHeight } = props;

    const [height, setHeight] = useState<number>();
    const [isTransition, setIsTransition] = useState(true);
    

    useEffect(() => {
        if (contentRef.current && props.isQuestion) {
            const newHeight = minHeight
                ? contentRef.current.offsetHeight > minHeight
                    ? contentRef.current.offsetHeight
                    : minHeight
                : contentRef.current.offsetHeight;
            setHeight(newHeight);
        }
    });

    const onTransitionEnd = () => {
        setIsTransition(false);
    };

    useEffect(() => {
        setIsTransition(false);
    }, [])

    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper
            onAnimationEnd={onAnimationEnd}
            ref={ref}
            onTransitionEnd={onTransitionEnd}
            {...props}
            style={{
                height: height ? `${height}px` : "auto",
            }}
        >
            <ContentWrapper
                ref={contentRef}
                style={{
                    opacity: 1
                }}
            >
                {!!children && <Inner padding={padding}>{children}</Inner>}
            </ContentWrapper>
        </Wrapper>
    );
});

export default Card;
