import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";

export const Link = styled.a<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.link,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})}
    
    &:hover {
        color: ${(props) => props.theme.colors.link.hover};
    }
    &:active, &:focus {
        color: ${(props) => props.theme.colors.link.pressed};
    }
`;
