import React from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

const ThemeButtons = () => {
    return (
        <Card padding={20} styles={{maxWidth: "none", width: "calc(50% - 20px)"}}>
            <Typography.Title>Кнопки</Typography.Title>
            <Container.Flex justify="start" gap={16} fullWidth >
                <Button styles={{ minWidth: "200px" }} onClick={() => { }}>
                    Обычная
                </Button>
                <Button
                    variant="outline"
                    styles={{ minWidth: "200px" }}
                    onClick={() => { }}
                >
                    Вторичная
                </Button>

                <Button
                    variant="disabled"
                    styles={{ minWidth: "200px" }}
                    onClick={() => { }}
                >
                    Контурная
                </Button>

                <Button
                    withLoader
                    pending={true}
                    styles={{ minWidth: "200px" }}
                    onClick={() => { }}
                >
                    С загрузкой
                </Button>

                <Button
                    icon="telegram"
                    styles={{ minWidth: "200px" }}
                    onClick={() => { }}
                >
                    C иконкой
                </Button>
            </Container.Flex>
        </Card>
    );
};

export default ThemeButtons;
