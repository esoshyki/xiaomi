import { useTheme } from "styled-components";
import { styled } from "../../../helpers/styled";
import { Props } from "../../types";
import Container from "../Container";
import Typography from "../Typography";
import { useState } from "react";

type CheckboxProps = Props<{
    label: string;
    name: string;
    onChange: () => void;
}>;

const Input = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    pointer-events: none;
`;

const Label = styled.span<{
    selected: boolean;
}>`
	position: relative;
	padding-left: 36px;
	min-height: 20px;
    
	font-size: 16px;
	line-height: 20px;
	color: ${(props) =>
			props.selected
					? props.theme.colors.link.default
					: props.theme.colors.text.default};
    transition: color 250ms;
    cursor: pointer;
    
    &::before,
    &::after {
        position: absolute;
        
        content: '';
    }

	&::before {
        left: 0;
        top: 0;

		width: 20px;
		height: 20px;
        box-sizing: border-box;

        border: 2px solid;
		border-color: ${(props) =>
				props.selected
						? props.theme.colors.link.default
						: props.theme.colors.icon.secondary};
		background-color: ${(props) =>
				props.selected
						? props.theme.colors.link.default
						: "transparent"};

		transition: all 250ms;
    }
	&::after {
		left: 4px;
		top: 3px;

		width: 13px;
		height: 13px;
		background-image: url("data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 7.5L4.5 11L11.5 1' stroke='white' stroke-width='2'/%3E%3C/svg%3E");
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const Checkbox = (props: CheckboxProps) => {
    const { label, name, onChange } = props;

    const [selected, setSelected] = useState<boolean>(
        false
    );

    const _onChange = () => {
        setSelected(!selected);
        onChange();
    };

    return (
        <label>
            <Input value={label} name={name} type="checkbox" onChange={_onChange}/>
            <Label selected={selected}>{label}</Label>
        </label>
    );
};

export default Checkbox;
