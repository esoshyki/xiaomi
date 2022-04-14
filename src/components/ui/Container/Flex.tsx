import styled from "styled-components/macro";
import { getFlexAligns, getFlexJustify } from "../../../helpers/getFlexProps";
import { Aligns, Justifies, Props } from "../../types";

type FlexProps = Props<{
    direction?: "row" | "column"
    justify?: Justifies
    alignItems?: Aligns
    fullWidth?: true,
    padding?: number,
    margin?: number
}>;

const FlexContainer = styled.div<FlexProps>`
    display: flex;
    width: ${props => props.fullWidth ? "100%" : "auto"};
    flex-direction: ${(props) => props.direction || "column"};
    justify-content: ${(props) => getFlexJustify(props.justify || "start")};
    align-items: ${(props) => getFlexAligns(props.alignItems || "center")};
    padding: ${props => `${props.padding || 0}px`};
    margin: ${props => `${props.margin || 0}px`};
    ${props => ({
        ...props.styles
    })}
`;

const Flex = (props: FlexProps) => {

    return (
        <FlexContainer
            {...props}
        >
            {!!props.children && props.children}
        </FlexContainer>
    );
};

export default Flex;
