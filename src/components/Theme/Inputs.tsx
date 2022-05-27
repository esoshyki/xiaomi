import React, {
    ChangeEvent,
    useState,
    useDeferredValue,
} from "react";
import Typography from "../ui/Typography";
import Card from "../ui/Card";

import Container from "../ui/Container";
import Input from "../ui/Input";

const ThemeInputs = () => {
    const [value, setValue] = useState("");
    const text = useDeferredValue(value);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const mobileProps = {
        width: "100%",
        margin: "20px 0",
    };

    return (
        <Card padding={20} styles={{maxWidth: "none", width: "calc(50% - 20px)"}}>
            <Typography.Title>Инпуты</Typography.Title>
            <Container.Flex direction="column" justify="start" wrapped gap={20} >
                <Input value={text} onChange={onChange} breakpoints={{"600" : mobileProps}} placeholder={"Плейсхолдер"}/>
                <Input
                    value={text}
                    breakpoints={{600 : mobileProps}}
                    onChange={onChange}
                    placeholder="Плейсхолдер"
                />
                <Input
                    value={text}
                    breakpoints={{600 : mobileProps}}
                    onChange={onChange}
                    error="Ошибка сервера"
                    placeholder="Плейсхолдер"
                />
            </Container.Flex>
        </Card>
    );
};

export default ThemeInputs;
