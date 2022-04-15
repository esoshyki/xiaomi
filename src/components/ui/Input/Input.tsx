import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Props } from "../../types";
import Typography from "../Typography";
import { InputTypes } from "./types";

type InputProps = Props<{
    label?: string;
    type?: InputTypes;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
}>;

const InputWrapper = styled.input<InputProps>`
    border: ${(props) => `1px solid ${props.theme.input.common.borderColor}`};
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.input.common.bgColor};
    color: ${(props) => props.theme.input.common.color};
    &:hover {
        border-color: ${(props) => props.theme.input.hover.borderColor};
        color: ${(props) => props.theme.input.hover.color};
        background-color: ${(props) => props.theme.input.hover.bgColor};
    }
    &:active {
        border-color: ${(props) => props.theme.input.active.borderColor};
        color: ${(props) => props.theme.input.active.color};
        background-color: ${(props) => props.theme.input.active.bgColor};
    }
    &:focus {
        border-color: ${(props) => props.theme.input.focus.borderColor};
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
                    }}
                >
                    {label}
                </Typography.Span>
            )}
        </Wrapper>
    );
};

export default Input;
