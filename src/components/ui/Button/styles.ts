import { ButtonProps } from "./Button";
import { css, DefaultTheme } from 'styled-components';

export const collectButtonStyles = (props: ButtonProps & { theme: DefaultTheme }) => {
    const variant = props.variant;
    const theme = props.theme;

    const defaultProps = css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        transition: background-color 200ms ease-in, padding-left 200ms ease-in;
        border-radius: 12px;
        position: relative;
        outline: none;
        box-shadow: none;  
        width: ${props.fullWidth ? "100%" : "auto"};
        height: ${props.fullHeight ? "100%" : "auto"};
        border: none;
        &:hover {
            cursor: pointer;
        }
    `

    switch (variant) {

        case "disabled":
            return css`
                ${defaultProps}
                background-color: ${theme.colors.button.disable};
                color: #fff;
                &:hover {
                    background-color: ${theme.colors.button.disable};
                    color: ${theme.colors.button.contrast};
                }
                &:active, &:focus {
                    background-color: ${theme.colors.button.disable}
                }
            `
        case "outline":
            return css`
                ${defaultProps}
                background-color: #fff;
                color: ${theme.colors.button.default};
                border: 1px solid ${theme.colors.button.default};
                &:hover {
                    background-color: ${theme.colors.button.hover};
                    color: ${theme.colors.button.contrast};
                }
                &:active, &:focus {
                    background-color: ${theme.colors.button.hover}
                }
            `
        case "danger":
            return css`
                ${defaultProps}
                background-color: ${theme.colors.info.error};
                color: ${theme.colors.button.contrast};
                &:hover {
                    background-color: ${theme.colors.info.error};
                }
                &:active, &:focus {
                    background-color: ${theme.colors.info.error};
                }
            `
        default:
            return css`
                ${defaultProps}
                background-color: ${theme.colors.button.default};
                color: #fff;
                &:hover {
                    background-color: ${theme.colors.button.hover}
                }
                &:active, &:focus {
                    background-color: ${theme.colors.button.pressed}
                }
            `
    }
}