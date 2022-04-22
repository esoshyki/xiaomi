import styled from "styled-components/macro"
import { TextProps } from "../types";

export const H5 = styled.h5<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.styles,
    })}
`;
