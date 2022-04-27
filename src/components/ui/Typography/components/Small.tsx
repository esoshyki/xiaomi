import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Small = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.small,
        ...props.styles,
    })};
    ${(props) => (props.color ? { color: props.color } : {})};
`;
