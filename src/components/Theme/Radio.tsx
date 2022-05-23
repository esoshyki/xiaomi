import { useState } from "react";
import { Container, Card, Radio, RadioSelect } from "../ui";

const blends = [
    "Apple",
    "Honor",
    "Huawei",
    "Realme",
    "Samsung",
    "Xiaomi",
    "Другой",
];

const ThemeRadio = () => {
    return (
        <Card styles={{ width: "312px" }}>
            <RadioSelect 
                styles={{ width: "70px", margin: "auto"}}
                items={blends.map((el, idx) => ({
                    value: idx,
                    label: el,
                }))}
            />
        </Card>
    );
};

export default ThemeRadio;
