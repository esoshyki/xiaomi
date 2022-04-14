import React from "react";
import styled, { keyframes } from "styled-components";
import { Props } from "../../types";
import { ReactComponent as LoadingIcon } from "../../../assets/loading.svg";

type ButtonVariants = "primary" | "secondary" | "outline";

const Rotation = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`

const Root = styled.button<ButtonProps>`
    padding: 20px;
    margin: 10px 20px;
    transition: background-color 200ms ease-in;
    position: relative;
    ${(props) => {
        const { variant="primary", theme } = props;
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
            backgroundColor: props.theme.buttons[props.variant ?? "primary"].hoverBackground,
        })}
    }
    &:active {
        ${(props) => ({
            backgroundColor:
                props.theme.buttons[props.variant ?? "primary"].activeBackground,
        })}
    }
    svg {
        animation: ${Rotation} 1000ms ease-in 0s infinite;
        position: absolute;
        width: 20px;
        left: 25px;
        fill: #fff;
    }
    ${(props) => ({
        ...props.styles,
    })}
`;

type ButtonProps = Props<{
    onClick: () => void;
    variant?: ButtonVariants;
    withLoader?: true;
    loading?: boolean;
    icon?: string;
}>;

const Button = (props: ButtonProps) => {
    const { children, withLoader, loading } = props;

    console.log((((withLoader && !loading) || !withLoader) && !!children))

    return (
        <Root {...props}>
            {withLoader && loading && <LoadingIcon />}
            {!!children && children}
        </Root>
    );
};

export default Button;
