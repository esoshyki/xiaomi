import React from "react";
import styled from "styled-components";
import { Props } from "../../types";

type ButtonVariants = "primary" | "secondary" | "outline";

const Root = styled.button<{
    variant: ButtonVariants;
}>`
    padding: 20px;
    transition: background-color 200ms ease-in;
    ${(props) => {
        const { variant, theme } = props;
        const buttonProps = theme.buttons[variant];
        return {
            color: buttonProps.textColor,
            backgroundColor: buttonProps.bgcolor,
            border: `1px solid ${buttonProps.borderColor}`,
        };
    }};
    &:hover {
        cursor: pointer;
        ${(props) => ({
            backgroundColor: props.theme.buttons[props.variant].hoverBackground,
        })}
    }
    &:active {
        ${(props) => ({
            backgroundColor:
                props.theme.buttons[props.variant].activeBackground,
        })}
    }
    ${(props) => ({
        ...props.style,
    })}
`;

type ButtonProps = Props<{
    onClick: () => void;
    variant?: ButtonVariants;
}>;

const Button = (props: ButtonProps) => {
    const { children, variant = "primary" } = props;

    return (
        <Root variant={variant} style={props.styles}>
            {!!children && children}
        </Root>
    );
};

export default Button;
