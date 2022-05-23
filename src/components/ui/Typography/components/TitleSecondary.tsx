import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

export const TitleSecondaryWrapper = styled.h2<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.title,
		color: props.theme.colors.text.secondary,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
    transition: all 200ms ease-in;
`;

export default function TitleSecondary (props: TextProps) {

    return <TitleSecondaryWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </TitleSecondaryWrapper>
}
