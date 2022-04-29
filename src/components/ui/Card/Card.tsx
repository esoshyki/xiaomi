import React, { forwardRef } from "react";
import { getCommonProps, Props } from "../../types";
import styled from "styled-components/macro";
import { getAnimations } from "../../../theme/animations";

type CardProps = Props<{
    noPadding?: boolean;
    noShadow?: true;
}>;

const Wrapper = styled.div<CardProps>`
    position: relative;
    border-radius: 20px;
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    height: ${(props) => (props.fullHeight ? "100%" : "auto")};
    ${(props) => getCommonProps(props)};
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04);
    transition: all 300ms linear;
    overflow-y: hidden;
    padding: 0;
    &:before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
		border-radius: 20px;
		background-color: ${(props) => props.theme.colors.background.opacity};
		backdrop-filter: blur(8px);
        content: '';
    }
    
    ${props => {
        if (props.isHidden) {
            return ({
                height: 0
            })
        }
    }}
`;

const Inner = styled.div<{padding: any}>`
   padding: ${(props) => (props.padding) ? props.padding : ""};
`;


const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
    const { children, onAnimationEnd, padding } = props;
    return (
        <Wrapper onAnimationEnd={onAnimationEnd} ref={ref} {...props}>
            {!!children &&
                <Inner padding={padding}>{children}</Inner>
            }
        </Wrapper>
    );
});

export default Card;
