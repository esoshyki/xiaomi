import React from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import Card from "../ui/Card";

import { Container } from "../ui/Container";

const ThemeButtons = () => {
    return (
        <Card>
            <Typography.H4 marginTop={0}>Кнопки</Typography.H4>
            <Container
                direction="row"
                justify="around"
                styles={{
                    minWidth: "700px",
                }}
            >
                <Button styles={{ minWidth: "200px" }} onClick={() => {}}>
                    Обычная
                </Button>
                <Button
                    variant="secondary"
                    styles={{ minWidth: "200px" }}
                    onClick={() => {}}
                >
                    Контурная
                </Button>

                <Button
                    variant="outline"
                    styles={{ minWidth: "200px" }}
                    onClick={() => {}}
                >
                    
                </Button>
            </Container>
        </Card>
    );
};

export default ThemeButtons;
