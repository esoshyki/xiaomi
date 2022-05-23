import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

export const RublesLargeWrapper = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.largeRubles,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
    transition: all 200ms ease-in;
`;

export default function RublesLarge (props: TextProps) {

    return <RublesLargeWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </RublesLargeWrapper>
}