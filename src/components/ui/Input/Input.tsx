import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";
import { useTheme } from 'styled-components/macro'
import { media } from "../../../theme/media";

type InputProps = Props<{
    label?: string;
    type?: InputTypes;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    error?: string;
    placeholder?: string
    defaultValue?: string
}>;

const InputWrapper = styled.input<InputProps>`
    border-style: solid;
    border-color: ${(props) => props.error
                ? props.theme.colors.error
                : props.theme.input.common.borderColor};
    padding: 10px 20px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.input.common.bgColor};
    color: ${(props) => props.theme.input.common.color};
    &:hover {
        border-color: ${(props) =>
            props.error
                ? props.theme.colors.errorHover
                : props.theme.input.hover.borderColor};
        color: ${(props) => props.theme.input.hover.color};
        background-color: ${(props) => props.theme.input.hover.bgColor};
    }
    &:active {
        outline: none;
        border-color: ${(props) =>
            props.error
                ? props.theme.colors.errorHover
                : props.theme.input.active.borderColor};
        color: ${(props) => props.theme.input.active.color};
        background-color: ${(props) => props.theme.input.active.bgColor};
    }
    &:focus {
        outline: none;
        border-color: ${(props) =>
            props.error
                ? props.theme.colors.errorHover
                : props.theme.input.focus.borderColor};
        color: ${(props) => props.theme.input.focus.color};
        background-color: ${(props) => props.theme.input.focus.bgColor};
    }
`;

const Wrapper = styled.div<InputProps>`
    position: relative;
    margin: 20px;
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};;
    ${(props) => ({
        ...props.styles,
    })}
    @media ${media.mobile} {
        ${props => ({
            ...props.mobile
        })}
    }
`;

const Input = (props: InputProps) => {
    const { label, value, onChange } = props;

    const theme = useTheme();

    const { input } = theme;

    return (
        <Wrapper {...props}>
            <InputWrapper
                {...props}
                type={props.type ?? "text"}
                onChange={onChange}
                value={value}
                placeholder={props.placeholder}
            ></InputWrapper>
            {label && (
                <Typography.Span
                    styles={{
                        position: "absolute",
                        top: "-10px",
                        padding: "0 10px",
                        left: "20px",
                        color: props.error ? theme.colors.error : input.common.labelColor,
                        backgroundColor: input.common.labelBackground
                    }}
                >
                    {label}
                </Typography.Span>
            )}

            {!!props.error && (
                <Typography.Error styles={{
                    position: "absolute",
                    top: "40px",
                    left: "10px"
                }}>{props.error}</Typography.Error>
            )}
        </Wrapper>
    );
};

export default Input;
