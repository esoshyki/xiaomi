import styled from "styled-components/macro"
import { TextProps } from "../types";

export const H4 = styled.h4<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    ${(props) => ({
        ...props.styles,
    })}
`;
