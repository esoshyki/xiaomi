import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";
import { useTheme } from 'styled-components/macro'

type InputProps = Props<{
    label?: string;
    type?: InputTypes;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: () => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
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
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: ${props => props.theme.colors.text.default};
	&::placeholder {
		color: ${props => props.theme.colors.text.secondary}
	}
    
`;

const Wrapper = styled.div<InputProps>`
    width: ${props => props.fullWidth ? "100%" : "auto"};
    ${props => getCommonProps(props)}
    
`;

const Input = (props: InputProps) => {
    const { label, value, onChange, onFocus, onKeyPress } = props;

    const theme = useTheme();

    return (
        <Wrapper {...props}>
            <InputWrapper
                {...props}
                type={props.type ?? "text"}
                onChange={onChange}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
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
