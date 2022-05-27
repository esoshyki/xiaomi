import { Card, Select, Container } from "../ui";
import React from "react";

const ThemeSelect = () => {
    return (
        <Card padding={20} styles={{maxWidth: "none", width: "calc(50% - 20px)"}}>
            <Select
                options={[
                    { label: "Первый элемент", value: "first" },
                    { label: "Второй элемент", value: "second" },
                    { label: "Третий элемент", value: "third" },
                ]}
            />
        </Card>
    );
};

export default ThemeSelect;
