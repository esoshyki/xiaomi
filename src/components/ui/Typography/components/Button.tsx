import styled from "styled-components/macro"
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Button = styled.span<TextProps>`
    ${props => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.button,
        ...props.styles,
    })}
`;
