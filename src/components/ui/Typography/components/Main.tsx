import styled from "styled-components/macro";
import { getCommonProps } from "../../../types";
import { TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

export const MainWrapper = styled.p<TextProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.main,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})};
`;

export default function Main (props: TextProps) {

    return <MainWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </MainWrapper>
}
