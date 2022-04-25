import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Medium = styled.p<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.theme.typography.medium,
        ...props.styles,
    })}
`;
