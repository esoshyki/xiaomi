import styled from "styled-components/macro";
import { getCommonProps } from "../../../types";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

export const MicroWrapper = styled.span<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.main,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
`;

export default function Micro (props: TextProps) {

    return <MicroWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </MicroWrapper>
}
