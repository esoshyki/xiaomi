import styled from "styled-components/macro";
import { getFlexAligns, getFlexJustify } from "../../../helpers/getFlexProps";

import { Aligns, collectGap, collectWrapperMargin, getCommonProps, Justifies, Props } from "../../types";
import { getAnimations } from "../../../theme/animations";

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
    width: ${props => props.fullWidth ? ((props.gap) ? `calc(100% + ${props.gap}px)`: (props.horizontalGap) ? `calc(100% + ${props.horizontalGap}px)` : "100%") : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};
	${props => collectWrapperMargin(props)};
    flex-direction: ${(props) => props.direction || "column"};
    flex-wrap: ${props => props.wrapped ? "wrap" : "no-wrap"};
    justify-content: ${(props) => getFlexJustify(props.justify || "start")};
    align-items: ${(props) => getFlexAligns(props.alignItems || "center")};
    padding: ${props => props.padding ? `${props.padding}px` : 0};
    ${props => getCommonProps(props)};
    ${props => collectGap(props)};
    ${props => getAnimations(props)};
    @supports (gap: 10px) {
        width: ${props => props.fullWidth ? "100%" : "auto"};
        margin-right: 0;
        margin-top: 0;
        column-gap: ${props => props.horizontalGap ? `${props.horizontalGap}px` : ""};
        row-gap: ${props => props.verticalGap ? `${props.verticalGap}px` : ""};
        gap: ${props => props.gap ? `${props.gap}px` : ""};
        
        & > * {
            margin: 0;
        }
    };
`;

const Flex = (props: FlexProps) => {

    return (
        <FlexContainer 
            className={props.className}
            onClick={props.onClick}
            {...props}
        >
            {!!props.children && props.children}
        </FlexContainer>
    );
};

export default Flex;
