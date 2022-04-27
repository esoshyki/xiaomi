import styled from "styled-components/macro"
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";

export const Link = styled.a<TextProps>`
    ${props => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.link,
        ...props.styles,
    })}
`;
