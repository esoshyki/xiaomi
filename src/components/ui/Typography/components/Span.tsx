import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Span = styled.span<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.styles,
    })}
`;
