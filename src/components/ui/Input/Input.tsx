import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";
import { useTheme } from 'styled-components/macro'

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
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div<InputProps>`
    position: relative;
    margin: 20px;
    padding: 10px 16px;
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};;
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.text.default};
    border: none;
    ${props => getCommonProps(props)}
    &::placeholder {
        color: ${props => props.theme.colors.text.secondary}
    }
`;

const Input = (props: InputProps) => {
    const { label, value, onChange } = props;

    const theme = useTheme();

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
                <Typography.Tertiary
                    styles={{
                        position: "absolute",
                        top: "-10px",
                        padding: "0 10px",
                        left: "20px",
                        color: props.error ? theme.colors.text.tertiary : theme.colors.text.default,
                        backgroundColor: "transparent"
                    }}
                >
                    {label}
                </Typography.Tertiary>
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
