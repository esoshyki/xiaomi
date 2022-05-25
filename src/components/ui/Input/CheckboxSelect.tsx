import { useState } from "react";
import { Props } from "../../types";
import Container from "../Container";
import Checkbox from "./Checkbox";

type CheckboxSelectProps = Props<{
    items: Array<{
        name: string;
        value: string | number; label: string }>;
    onChange?: (value: string | number) => void;
    defaultValue?: string | number;
}>;

const CheckboxSelect = (props: CheckboxSelectProps) => {
    const { items, onChange } = props;

    const _onChange = (value: string | number) => {
        onChange && onChange(value)
    };

    return (
        <Container.Flex {...props} verticalGap={24} styles={{width: "max-content", margin: "0 auto 12px"}}>
            {items.map((el, idx) => (
                <Checkbox
                    onChange={() => _onChange(el.value)}
                    label={el.label}
                    name={el.name}
                    key={idx}
                />
            ))}
        </Container.Flex>
    );
};

export default CheckboxSelect;
