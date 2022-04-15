import styled from "styled-components/macro"
import { TextProps } from "../types";

export const H1 = styled.h1<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    ${(props) => ({
        ...props.styles,
    })}
`;
