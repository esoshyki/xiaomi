import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Link = styled.a<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.theme.typography.link,
        ...props.styles,
    })}
`;
