import React from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Icon from "../Icon";
import { Icons } from '../Icon/types'

type ButtonVariants = "primary" | "disabled" | "outline";

const Root = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: background-color 200ms ease-in, padding-left 200ms ease-in;
    position: relative;
    border-radius: ${props => props.square? "0" : "12px"};
    border-width: ${(props) => (props.variant === "outline" ? "1px" : "0px")};
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};;
    background-color: ${props => props.variant === "outline" ? "transparent" : props.theme.colors.button.default};
    color: ${props => props.variant === "outline" ? props.theme.colors.button.default : props.theme.colors.button.contrast};
    margin: 0;
    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors.button.hover};
        color: ${props => props.theme.colors.button.contrast};
    }
    &:active {
        background: ${props => props.theme.colors.button.pressed};
        color: ${props => props.theme.colors.button.contrast};
    }
    svg {

    }
    ${(props) => getCommonProps(props)}
`;

type ButtonProps = Props<{
    onClick?: () => void;
    variant?: ButtonVariants;
    withLoader?: true;
    pending?: boolean;
    icon?: Icons;
    square?: true
    sumbit?: true
}>;

const Button = (props: ButtonProps) => {
    const { children, withLoader, pending, icon } = props;

    return (
        <Root {...props} type={props.sumbit ? "submit" : "button"}>
            {withLoader && pending && <Icon name="loading" />}
            {icon && !(withLoader && pending) && <Icon name={icon} />}
            {!!children && children}
        </Root>
    );
};

export default Button;
