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
        <Card>
            <Typography.H4 styles={{ marginTop: 0 }}>Инпуты</Typography.H4>
            <Container.Flex direction="row" justify="start" wrapped>
                <Input value={text} onChange={onChange} mobile={mobileProps} />
                <Input
                    value={text}
                    label="С лейблом"
                    mobile={mobileProps}
                    onChange={onChange}
                />
                <Input
                    value={text}
                    label="Ошибка"
                    mobile={mobileProps}
                    onChange={onChange}
                    error="Ошибка сервера"
                />
            </Container.Flex>
        </Card>
    );
};

export default ThemeInputs;
