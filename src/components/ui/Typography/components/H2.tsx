import styled from "styled-components/macro"
import { TextProps } from "../types";

export const H2 = styled.h2<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    ${(props) => ({
        ...props.styles,
    })}
`;
