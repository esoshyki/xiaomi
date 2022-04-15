import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Mark = styled.mark<TextProps>`
    color: ${(props) => props.theme.colors.text.main};
    ${(props) => ({
        ...props.styles,
    })}
`;
