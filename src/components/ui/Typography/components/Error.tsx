import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Error = styled.span<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.theme.typography.small,
        color: props.theme.colors.info.error,
        ...props.styles,
    })}
`;
