import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

export const BigWrapper = styled.p<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.big,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
    transition: all 200ms ease-in;
`;

export default function Big (props: TextProps) {

    return <BigWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </BigWrapper>
}