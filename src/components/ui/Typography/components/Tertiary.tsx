import styled from "styled-components/macro"
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Tertiary = styled.span<TextProps>`
    ${props => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.small,
        color: props.theme.colors.text.tertiary,
        ...props.styles,
    })}
`;
