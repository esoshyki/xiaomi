import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Button = styled.span<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.theme.typography.button,
        ...props.styles,
    })}
`;
