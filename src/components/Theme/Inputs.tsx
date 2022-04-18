import React, { ChangeEvent, useState, useDeferredValue, useEffect } from "react";
import Typography from "../ui/Typography";
import Card from "../ui/Card";

import Container from "../ui/Container";
import Input from "../ui/Input";

const ThemeInputs = () => {

    const [value, setValue] = useState("");
    const text = useDeferredValue(value);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    } 

    return (
        <Card>
            <Typography.H4 styles={{marginTop: 0}}>Инпуты</Typography.H4>
            <Container.Flex
                direction="row"
                justify="around"
                wrap
            >
               <Input value={text} onChange={onChange}/>
               <Input value={text} label="С лейблом" onChange={onChange}/>
               <Input value={text} label="Ошибка" onChange={onChange} error="Ошибка сервера"/>
            </Container.Flex>
        </Card>
    );
};

export default ThemeInputs;
