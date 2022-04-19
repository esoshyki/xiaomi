import styled from "styled-components/macro";
import { getFlexAligns, getFlexJustify } from "../../../helpers/getFlexProps";
import { media } from "../../../theme/media";
import { Aligns, Justifies, Props } from "../../types";

type FlexProps = Props<{
    direction?: "row" | "column"
    justify?: Justifies
    alignItems?: Aligns
    fullWidth?: true,
    padding?: number,
    margin?: number
    wrapped?: true
}>;

const FlexContainer = styled.div<FlexProps>`
    display: flex;
    width: ${props => props.fullWidth ? "100%" : "auto"};
    flex-direction: ${(props) => props.direction || "column"};
    flex-wrap: ${props => props.wrapped ? "wrap" : "no-wrap"};
    justify-content: ${(props) => getFlexJustify(props.justify || "start")};
    align-items: ${(props) => getFlexAligns(props.alignItems || "center")};
    padding: ${props => `${props.padding || 0}px`};
    margin: ${props => props.margin ? `${props.margin}px` : "auto"};
    ${props => ({
        ...props.styles
    })};
    @media ${media.mobile} {
        ${props => ({
            ...props.mobile
        })}
    }
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
