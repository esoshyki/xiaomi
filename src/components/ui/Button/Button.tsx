import React from "react";
import styled from "styled-components";
import { Props } from "../../types";
import Icon from "../Icon";
import { Icons } from '../Icon/types'

type ButtonVariants = "primary" | "secondary" | "outline";

const Root = styled.button<ButtonProps>`
    padding: 20px;
    margin: 10px 20px;
    transition: background-color 200ms ease-in, padding-left 200ms ease-in;
    position: relative;
    border-radius: ${props => props.square? "0" : "28px"};
    ${(props) => {
        const { variant = "primary", theme } = props;
        const buttonProps = theme.buttons[variant];
        return {
            color: buttonProps.textColor,
            backgroundColor: buttonProps.bgcolor,
            border: `1px solid ${buttonProps.borderColor}`,
        };
    }};
    border-width: ${(props) => (props.variant === "outline" ? "0" : "1px")};
    box-shadow: 0px 0px 5px 1px grey;
    padding-left: ${props => ((props.withLoader && props.pending) || props.icon) ? "60px" : "20px"};
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};;
    &:hover {
        cursor: pointer;
        ${(props) => ({
            backgroundColor:
                props.theme.buttons[props.variant ?? "primary"].hoverBackground,
        })}
    }
    &:active {
        ${(props) => ({
            backgroundColor:
                props.theme.buttons[props.variant ?? "primary"]
                    .activeBackground,
        })}
    }
    svg {
        position: absolute;
        left: 25px;
        fill: #fff;

       &[type=loading] {
            width: 40px;
            height: 40px;
            left: 10px;
            top: 7px;
       }
    }
    ${(props) => ({
        ...props.styles,
    })}
`;

type ButtonProps = Props<{
    onClick: () => void;
    variant?: ButtonVariants;
    withLoader?: true;
    pending?: boolean;
    icon?: Icons;
    square?: true
}>;

const Button = (props: ButtonProps) => {
    const { children, withLoader, pending, icon } = props;

    return (
        <Root {...props}>
            {withLoader && pending && <Icon name="loading" />}
            {icon && !(withLoader && pending) && <Icon name={icon} />}
            {!!children && children}
        </Root>
    );
};

export default Button;
