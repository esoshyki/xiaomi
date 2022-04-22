import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Error = styled.span<TextProps>`
    color: ${(props) => props.theme.colors.error};
    font-size: 12px;
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.styles,
    })}
`;
