import styled from "styled-components/macro";
import { getCommonProps } from "../../../types";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Main = styled.p<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.main,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
`;
