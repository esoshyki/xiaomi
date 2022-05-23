import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { getCommonProps, Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";
import { useTheme } from "styled-components/macro";
import Icon from "../Icon";

type InputProps = Props<{
    label?: string;
    type?: InputTypes;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
    value?: string | number;
    error?: string;
    placeholder?: string;
    defaultValue?: string;
    secure?: boolean;
}>;

const InputWrapper = styled.input<InputProps>`
    border: ${(props) =>
        props.error ? `1px solid ${props.theme.colors.info.error}` : "none"};
    border-radius: 12px;
    padding: 10px 20px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) =>
        props.error
            ? props.theme.colors.info.error
            : props.theme.colors.text.default};
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(8px);
    user-select: none;
    outline: none;

    &::placeholder {
        color: ${(props) =>
            props.error
                ? props.theme.colors.info.error
                : props.theme.colors.text.secondary};
    }
`;

const Wrapper = styled.div<InputProps>`
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    ${(props) => getCommonProps(props)}
    position: relative;
`;

const Input = (props: InputProps) => {
    const { label, value, onChange, onFocus, onKeyPress, secure } = props;

    const [_secure, setSecure] = useState(secure);

    const theme = useTheme();

    const getType = () => {
        if (_secure === true) return "password";
        if (_secure === false) return "text";
        return props.type ?? "text";
    };

    return (
        <Wrapper fullWidth>
            <InputWrapper
                {...props}
                type={getType()}
                onChange={onChange}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
                value={value}
                placeholder={props.placeholder}
            ></InputWrapper>

            {typeof _secure === "boolean" && (
                <Icon
                    onClick={() => setSecure(!_secure)}
                    name={_secure ? "eye-close" : "eye"}
                    styles={{
                        position: "absolute",
                        top: "10px",
                        right: "12px",
                        fill: theme.colors.icon.tertiary,
                    }}
                    hoverStyles={{ cursor: "pointer" }}
                />
            )}
            {label && (
                <Typography.Tertiary
                    styles={{
                        position: "absolute",
                        top: "-10px",
                        padding: "0 10px",
                        left: "20px",
                        color: props.error
                            ? theme.colors.text.tertiary
                            : theme.colors.text.default,
                        backgroundColor: "transparent",
                    }}
                >
                    {label}
                </Typography.Tertiary>
            )}

            {!!props.error && (
                <Typography.Error
                    styles={{
                        position: "absolute",
                        top: "42px",
                        left: "10px",
                    }}
                >
                    {props.error}
                </Typography.Error>
            )}
        </Wrapper>
    );
};

export default Input;
