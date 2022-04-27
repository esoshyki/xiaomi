import styled from "styled-components/macro"
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const RublesLarge = styled.span<TextProps>`
    ${props => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.largeRubles,
        ...props.styles,
    })}
`;
