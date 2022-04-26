import React, { forwardRef } from "react";
import { getCommonProps, Props } from "../../types";
import styled from "styled-components/macro";
import { getAnimations } from "../../../theme/animations";

type CardProps = Props<{
    padding?: number;
    noPadding?: boolean;
    margin?: number;
    noShadow?: true;
}>;

const Wrapper = styled.div<CardProps>`
    ${(props) => {
        const { margin, padding } = props;
        return {
            margin: margin ? `${margin}px` : undefined,
            padding: padding ? `${padding}px` : undefined,
        };
    }};
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.background.opacity};
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    height: ${(props) => (props.fullHeight ? "100%" : "auto")};
    ${(props) => getCommonProps(props)};
    ${(props) => getAnimations(props)};
    ${props => {
        if (props.isHidden) {
            return ({
                height: 0,
                padding: 0,
                overflow: "hidden",
                "& > *" : {
                    opacity: 0
                }
            })
        }
    }}
`;

const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
    const { children, onAnimationEnd } = props;
    return (
        <Wrapper onAnimationEnd={onAnimationEnd} ref={ref} {...props}>
            {!!children && children}
        </Wrapper>
    );
});

export default Card;
