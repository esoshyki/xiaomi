import styled from "styled-components/macro";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

export const TertiaryWrapper = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.small,
        color: props.theme.colors.text.tertiary,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
    transition: all 200ms ease-in;
`;

export default function Tertiary (props: TextProps) {

    return <TertiaryWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </TertiaryWrapper>
}