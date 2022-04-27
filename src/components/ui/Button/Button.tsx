import React, { forwardRef, MouseEvent, useEffect, useRef } from "react";
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
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    variant?: ButtonVariants;
    withLoader?: true;
    pending?: boolean;
    icon?: Icons;
    square?: true;
    sumbit?: true;
}>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const { children, withLoader, pending, icon } = props;

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.blur()
        }
    })

    return (
        <Root ref={ref ?? buttonRef} {...props} type={props.sumbit ? "submit" : "button"}>
            {withLoader && pending && <Icon name="loading" styles={{marginRight: "10px"}}/>}
            {icon && !(withLoader && pending) && <Icon name={icon} styles={{marginRight: "10px"}}/>}
            {!!children && children}
        </Root>
    );
});

export default Button;
