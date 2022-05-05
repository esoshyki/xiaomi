import React, { forwardRef } from "react";
import { getCommonProps, Props } from "../../types";
import styled from "styled-components/macro";
import { getAnimations } from "../../../theme/animations";

type CardProps = Props<{
    noPadding?: boolean;
    noShadow?: true;
    animateHeight?: boolean;
    animateWidth?: boolean;
}>;

const Wrapper = styled.div<CardProps>`
    position: relative;
    border-radius: 20px;
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    height: ${(props) => (props.fullHeight ? "100%" : "auto")};
	max-width: 344px;
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04);
    transition: all 300ms linear;
    overflow-y: ${(props) => (props.animateHeight ? "hidden" : "auto")};
    overflow-x: ${(props) => (props.animateWidth ? "hidden" : "auto")};
    ${props => getCommonProps(props)};
    padding: 0;
    &:before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
		border-radius: inherit;
		background-color: ${(props) => props.theme.colors.background.opacity};
		backdrop-filter: blur(8px);
        content: '';
    }
    
    & > * {
        opacity: ${(props) => (props.isHidden ? "0" : "1")};
    }
    
    @media (min-width: 660px) and (max-width: 768px) {
		max-width: calc(50% - 18px);
    };
    ${props => {
        if (props.isHidden) {
            if (props.animateHeight) {
                return ({
                    height: 0
                })
            } else if (props.animateWidth) {
				return ({
                    width: 0
				})
			}
        }
    }}
`;

const Inner = styled.div<{padding: any}>`
    padding: ${(props) => (props.padding) ? props.padding : ""};
    border-radius: inherit;
    transition: opacity 200ms;
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
