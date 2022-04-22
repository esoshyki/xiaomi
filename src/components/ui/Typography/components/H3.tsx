import styled from "styled-components/macro"
import { TextProps } from "../types";

export const H3 = styled.h3<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.styles,
    })}
`;
