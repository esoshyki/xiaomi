import { useState } from "react";
import { getCommonProps, Props } from "../../types";
import { useTheme } from "styled-components";
import styled from "styled-components";
import Icon from "../Icon";

const SelectWrapper = styled.select<SelectProps>`
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.text.default};
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(8px);
    appearance: none;

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: ${(props) => props.theme.colors.text.secondary};
    }
`;

const Wrapper = styled.div<SelectProps>`
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    ${(props) => getCommonProps(props)}
    position: relative;
`;

type SelectProps = Props<{
    options: Array<{ value: string; label: string }>;
}>;

const SelectComponent = (props: SelectProps) => {
    const { options } = props;

    const [state, setState] = useState({
        focus: false,
    });

    const blur = () => setState((prev) => ({ ...prev, focus: false }));
    const focus = () => setState((prev) => ({ ...prev, focus: true }));

    const theme = useTheme();

    return (
        <Wrapper fullWidth {...props}>
            <Icon
                name="arrow"
                styles={{
                    position: "absolute",
                    right: "20px",
                    top: "10px",
                    transition: "200ms ease-in",
                    transform: `rotate(${state.focus ? 180 : 0}deg)`,
                }}
            />
            <SelectWrapper {...props} onFocus={focus} onBlur={blur}>
                {options.map((el, key) => (
                    <option onSelect={blur} key={key} value={el.value}>
                        {el.label}
                    </option>
                ))}
            </SelectWrapper>
        </Wrapper>
    );
};

export default SelectComponent;
