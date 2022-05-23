import styled from "styled-components/macro";
import { getTextProps, TextProps } from "../types";
import { getTextAlign } from "./helpers";
import { getCommonProps } from "../../../types";
import { IndicatorStyles } from "..";
import Icon from "../../Icon";

type LinkProps = TextProps & {
    href: string
    target?: string
}

export const LinkWrapper = styled.a<LinkProps>`
    ${(props) => getTextAlign(props)};
    ${(props) => ({
        ...props.theme.typography.link,
        ...props.styles,
    })};
    ${(props) => getCommonProps(props)};
    ${(props) => (props.color ? { color: props.color } : {})}
    ${props => getTextProps(props)};
    transition: all 200ms ease-in;
    
    &:hover {
        color: ${(props) => props.theme.colors.link.hover};
    }
    &:active, &:focus {
        color: ${(props) => props.theme.colors.link.pressed};
    }
`;

export default function Link (props: LinkProps) {

    return <LinkWrapper {...props}>
        {props.children}
        {props.withIndicator && <Icon name="color-indicator" styles={IndicatorStyles}/>}
    </LinkWrapper>
}