import React, { ChangeEvent, useState, useDeferredValue } from "react";
import Typography from "../ui/Typography";
import Card from "../ui/Card";

import { Container } from "../ui/Container";
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
            <Container
                direction="row"
                justify="around"
            >
               <Input value={text} onChange={onChange}/>
               <Input value={text} label="С лейблом" onChange={onChange}/>
            </Container>
        </Card>
    );
};

export default ThemeInputs;
