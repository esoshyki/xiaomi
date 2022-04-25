import React from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

const ThemeButtons = () => {
    return (
        <Card>
            <Typography.Title styles={{ marginTop: 0 }}>Кнопки</Typography.Title>
            <Container.Flex direction="row" justify="start" wrapped fullWidth breakpoints={{
                600: {
                    flexDirection: "column",
                    alignItems: "center"
                }
            }}>
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
