import styled from "styled-components/macro"
import { TextProps } from "../types";

export const Title = styled.h2<TextProps>`
    text-align: ${props => props.textAlign ?? "center"};

    ${(props) => ({
        ...props.theme.typography.title,
        ...props.styles,
    })}
`;
