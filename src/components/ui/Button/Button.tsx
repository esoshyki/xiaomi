import React from 'react'
import styled from 'styled-components'
import { Props } from "../../types";

type ButtonVariants = "primary" | "secondary" | "outline"

const Root = styled.button<{
    variant: ButtonVariants
}>`
    padding: 20px;
    ${props => {
        const { variant, theme } = props;
        const buttonProps = theme.buttons[variant];
        console.log(variant)
        return ({
            color: buttonProps.textColor,
            backgroundColor: buttonProps.bgcolor,
            border: `1px solid ${buttonProps.borderColor}`
        })
    }};
    ${props => ({
        ...props.style
    })}
`;

type ButtonProps = Props<{
    onClick: () => void
    variant?: ButtonVariants
}>

const Button = (props: ButtonProps) => {
    const { children, variant = "primary" } = props;

    return (
        <Root variant={variant} style={props.styles}>
            {!!children && children}
        </Root>
    )
};

export default Button