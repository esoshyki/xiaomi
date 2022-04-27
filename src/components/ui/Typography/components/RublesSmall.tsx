import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const RublesSmall = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.largeRubles,
        ...props.styles,
    })};
    ${(props) => (props.color ? { color: props.color } : {})};
`;
