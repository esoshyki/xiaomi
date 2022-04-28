import styled from "styled-components/macro";
import { getFlexAligns, getFlexJustify } from "../../../helpers/getFlexProps";
import { getAnimations } from "../../../theme/animations";
import { Aligns, collectGap, getCommonProps, Justifies, Props } from "../../types";

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
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};
    flex-direction: ${(props) => props.direction || "column"};
    flex-wrap: ${props => props.wrapped ? "wrap" : "no-wrap"};
    justify-content: ${(props) => getFlexJustify(props.justify || "start")};
    align-items: ${(props) => getFlexAligns(props.alignItems || "center")};
    padding: ${props => props.padding ? `${props.padding}px` : 0};
    ${props => getCommonProps(props)};
    ${props => collectGap(props)};
    ${props => getAnimations(props)};
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
