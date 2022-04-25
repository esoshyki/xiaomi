import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Main = styled.p<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};
    ${(props) => ({
        ...props.theme.typography.main,
        ...props.styles,
    })}
`;
