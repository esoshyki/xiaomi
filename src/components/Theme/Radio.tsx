import React, { useState } from "react";
import { Container, Card, Radio, RadioSelect } from "../ui";
import Typography from "../ui/Typography";

const blends = [
    "Apple",
    "Honor",
    "Huawei",
    "Realme",
];

const ThemeRadio = () => {
    return (
        <Card padding={20} styles={{maxWidth: "none", width: "calc(50% - 20px)"}}>
            <Typography.Title>Radiobutton</Typography.Title>
            <RadioSelect 
                styles={{}}
                items={blends.map((el, idx) => ({
                    value: idx,
                    label: el,
                }))}
            />
        </Card>
    );
};

export default ThemeRadio;
