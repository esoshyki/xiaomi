import styled from "styled-components/macro"
import { TextProps } from "../types";

export const H5 = styled.h5<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    ${(props) => ({
        ...props.styles,
    })}
`;