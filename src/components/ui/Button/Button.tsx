import React from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Icon from "../Icon";
import { Icons } from "../Icon/types";

type ButtonVariants = "primary" | "disabled" | "outline";

const Root = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: background-color 200ms ease-in, padding-left 200ms ease-in;
    position: relative;
    outline: none;
    border-style: solid;
    box-shadow: none;
    ${(props) => ({
        borderRadius: props.square ? "0" : "12px",
        borderWidth: props.variant === "outline" ? "1px" : "0px",
        width: props.fullWidth ? "100%" : "auto",
        height: props.fullHeight ? "100%" : "auto",
        backgroundColor:
            props.variant === "outline"
                ? "#fff"
                : props.theme.colors.button.default,
        color:
            props.variant === "outline"
                ? props.theme.colors.button.default
                : props.theme.colors.button.contrast,
        borderColor: props.theme.colors.button.default,
        "&:hover": {
            background: props.theme.colors.button.hover,
            borderColor: props.theme.colors.button.hover,
            color: props.theme.colors.button.contrast,
        },
        "&:active": {
            background: props.theme.colors.button.pressed,
            borderColor: props.theme.colors.button.pressed,
            color: props.theme.colors.button.contrast,
        },
    })}
    ${(props) => getCommonProps(props)}
`;

type ButtonProps = Props<{
    onClick?: () => void;
    variant?: ButtonVariants;
    withLoader?: true;
    pending?: boolean;
    icon?: Icons;
    square?: true;
    sumbit?: true;
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
