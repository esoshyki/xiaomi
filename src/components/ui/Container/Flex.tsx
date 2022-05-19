import styled from "styled-components/macro";
import { getFlexAligns, getFlexJustify } from "../../../helpers/getFlexProps";
import { Aligns, getCommonProps, Justifies, Props } from "../../types";
import { getAnimations } from "../../../theme/animations";
import { forwardRef } from "react";

export type FlexProps = Props<{
    direction?: "row" | "column"
    justify?: Justifies
    alignItems?: Aligns
    fullWidth?: true
    fullHeight?: true
    wrapped?: true
    onClick?: (v: any) => void
    gap?: number
    verticalGap?: number
    horizontalGap?: number
    padding?: number
}>;

const FlexContainer = styled.div<FlexProps>`
    display: flex;
	${props => getCommonProps(props)};
    flex-direction: ${(props) => props.direction || "column"};
    flex-wrap: ${props => props.wrapped ? "wrap" : "no-wrap"};
    justify-content: ${(props) => getFlexJustify(props.justify || "start")};
    align-items: ${(props) => getFlexAligns(props.alignItems || "center")};
    padding: ${props => props.padding ? `${props.padding}px` : ""};
    ${props => getAnimations(props)};
	column-gap: ${props => props.horizontalGap ? `${props.horizontalGap}px` : ""};
	row-gap: ${props => props.verticalGap ? `${props.verticalGap}px` : ""};
	gap: ${props => props.gap ? `${props.gap}px` : ""};
`;

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {

    return (
        <FlexContainer 
            ref={ref}
            className={props.className}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            {...props}
        >
            {!!props.children && props.children}
        </FlexContainer>
    );
});

export default Flex;
