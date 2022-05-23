import { useState } from "react";
import { Props } from "../../types";
import Container from "../Container";
import Radio from "./Radio";

type RadioSelectProps = Props<{
    items: Array<{ value: string | number; label: string }>;
    onChange?: (value: string | number) => void;
    defaultValue?: string | number;
}>;

const RadioSelect = (props: RadioSelectProps) => {
    const { items, onChange, defaultValue } = props;

    const [selected, setSelected] = useState<string | number>(
        defaultValue ?? 0
    );

    const _onChange = (value: string | number) => {
        setSelected(value);
        onChange && onChange(value)
    };

    return (
        <Container.Flex {...props}>
            {items.map((el, idx) => (
                <Radio
                    selected={selected === el.value}
                    onChange={() => _onChange(el.value)}
                    label={el.label}
                    key={idx}
                />
            ))}
        </Container.Flex>
    );
};

export default RadioSelect;
