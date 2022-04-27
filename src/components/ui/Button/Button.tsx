import React from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Icon from "../Icon";
import { Icons } from "../Icon/types";
import { collectButtonStyles } from "./styles";

export type ButtonVariants = "primary" | "disabled" | "outline" | "danger";

const Root = styled.button<ButtonProps>`
    ${props => collectButtonStyles(props)}
    ${(props) => getCommonProps(props)}
`;

export type ButtonProps = Props<{
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
