import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";
import Icon from "../../Icon";
import { IndicatorStyles } from "..";

export const ButtonWrapper = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.button,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})}
    position: relative;
    transition: all 200ms ease-in;
`;

export default function Button (props: TextProps) {

    return <ButtonWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </ButtonWrapper>
}