import styled from "styled-components/macro"
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Error = styled.span<TextProps>`
    ${props => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.small,
        color: props.theme.colors.info.error,
        ...props.styles,
    })}
`;
