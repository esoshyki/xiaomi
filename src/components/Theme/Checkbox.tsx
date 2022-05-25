import React, { useState } from "react";
import { Container, Card, Radio, RadioSelect } from "../ui";
import Typography from "../ui/Typography";
import CheckboxSelect from "../ui/Input/CheckboxSelect";

const blends = [
    "Чекбокс 1",
    "Чекбокс 2",
    "Чекбокс 3",
    "Чекбокс 4",
];

const ThemeCheckbox = () => {
    return (
        <Card padding={20} styles={{maxWidth: "none", width: "calc(50% - 20px)"}}>
            <Typography.Title>Checkbox</Typography.Title>
            <CheckboxSelect
                styles={{}}
                items={blends.map((el, idx) => ({
                    value: idx,
                    label: el,
                    name: "test"
                }))}
            />
        </Card>
    );
};

export default ThemeCheckbox;
