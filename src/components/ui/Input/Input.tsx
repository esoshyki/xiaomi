import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";
import { useTheme } from 'styled-components/macro'
import Icon from "../Icon";

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
    secure?: boolean
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
    position: relative;
`;

const Input = (props: InputProps) => {
    const { label, value, onChange, onFocus, onKeyPress, secure } = props;

    const [_secure, setSecure] = useState(secure);

    const theme = useTheme();

    const getType = () => {
        if (_secure === true) return "password";
        if (_secure === false) return "text";
        return props.type ?? "text"
    }

    return (
        <Wrapper {...props}>
            <InputWrapper
                {...props}
                type={getType()}
                onChange={onChange}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
                value={value}
                placeholder={props.placeholder}
            ></InputWrapper>

            {typeof _secure === "boolean" && <Icon 
                onClick={() => setSecure(!_secure)}
                name={_secure ? "hidden" : "eye"}
                styles={{ position: "absolute", top: "10px", right: "12px" }} hoverStyles={{ cursor: "pointer" }} 
                />}
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
