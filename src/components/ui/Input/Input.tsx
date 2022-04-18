import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";
import { useTheme } from 'styled-components'

type InputProps = Props<{
    label?: string;
    type?: InputTypes;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    error?: string;
}>;

const InputWrapper = styled.input<InputProps>`
    border: ${(props) =>
        `1px solid ${
            props.error
                ? props.theme.colors.error
                : props.theme.input.common.borderColor
        }`};
    padding: 10px 20px;
    border-radius: 5px;
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
        border-color: ${(props) =>
            props.error
                ? props.theme.colors.errorHover
                : props.theme.input.active.borderColor};
        color: ${(props) => props.theme.input.active.color};
        background-color: ${(props) => props.theme.input.active.bgColor};
    }
    &:focus {
        border-color: ${(props) =>
            props.error
                ? props.theme.colors.errorHover
                : props.theme.input.focus.borderColor};
        color: ${(props) => props.theme.input.focus.color};
        background-color: ${(props) => props.theme.input.focus.bgColor};
    }
    ${(props) => ({
        ...props.styles,
    })}
`;

const Wrapper = styled.div`
    position: relative;
    margin: 20px;
`;

const Input = (props: InputProps) => {
    const { label, value, onChange } = props;

    const theme = useTheme();

    console.log(theme);
    return (
        <Wrapper>
            <InputWrapper
                {...props}
                type={props.type ?? "text"}
                onChange={onChange}
                value={value}
            ></InputWrapper>
            {label && (
                <Typography.Span
                    styles={{
                        backgroundColor: "#fff",
                        position: "absolute",
                        top: "-10px",
                        padding: "0 10px",
                        left: "20px",
                        color: props.error ? theme.colors.error : theme.colors.text.main
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
