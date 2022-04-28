import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";

export const Error = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.small,
        color: props.theme.colors.info.error,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})}
`;
