import styled from "styled-components/macro";
import { getFlexAligns, getFlexJustify } from "../../../helpers/getFlexProps";
import { Aligns, getCommonProps, Justifies, Props } from "../../types";

type FlexProps = Props<{
    direction?: "row" | "column"
    justify?: Justifies
    alignItems?: Aligns
    fullWidth?: true
    fullHeight?: true
    padding?: number
    margin?: number
    wrapped?: true
    onClick?: (v: any) => void
}>;

const FlexContainer = styled.div<FlexProps>`
    display: flex;
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};
    flex-direction: ${(props) => props.direction || "column"};
    flex-wrap: ${props => props.wrapped ? "wrap" : "no-wrap"};
    justify-content: ${(props) => getFlexJustify(props.justify || "start")};
    align-items: ${(props) => getFlexAligns(props.alignItems || "center")};
    padding: ${props => `${props.padding || 0}px`};
    margin: ${props => props.margin ? `${props.margin}px` : "auto"};
    ${props => getCommonProps(props)};
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
