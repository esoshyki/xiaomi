import React, { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonVariants = "primary" | "secondary"

const Root = styled.button<{
    variant: ButtonVariants
}>`
    padding: 20px;
`

interface ButtonProps {
    onClick: () => void
    variant?: ButtonVariants
    children: ReactNode
}

const Button = (props: ButtonProps) => {
    const { children, variant = "primary" } = props;

    return (
        <Root variant={variant}>
            {children}
        </Root>
    )
};

export default Button