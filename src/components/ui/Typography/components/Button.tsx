import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";

export const Button = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.button,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})}
`;
