import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Tertiary = styled.span<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.theme.typography.small,
        color: props.theme.colors.text.tertiary,
        ...props.styles,
    })}
`;
