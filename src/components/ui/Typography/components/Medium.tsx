import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Medium = styled.p<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.medium,
        ...props.styles,
    })};
    ${(props) => (props.color ? { color: props.color } : {})};
`;
