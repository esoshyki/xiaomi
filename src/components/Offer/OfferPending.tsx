import { Container, Img, Typography } from "../ui";
import DonePNG from "../../assets/done.png";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

const OfferPending = () => {
    const theme = useTheme();
    const [points, setPoints] = useState("");

    useEffect(() => {
        const tick = () => {
                if (points.length < 3) {
                    setPoints(points + ".")
                } else {
                    setPoints("")
                }
        }

        window.setTimeout(tick, 500)
    }, [points])

    return (
        <Container.Flex fullWidth alignItems="start">
            <Container.Flex fullWidth direction="row" justify="center">
                <Img image={DonePNG} />
                <Typography.Title
                    styles={{ marginLeft: "4px" }}
                    color={theme.colors.link.default}
                >
                    Все фото загружены
                </Typography.Title>
            </Container.Flex>

            <Typography.Title start>Подтверждение стоимости</Typography.Title>
            <Typography.Main start>
                {" "}
                Сейчас происходит проверка предоставленных вами данных. Время
                проверки не превышает 5 минут
            </Typography.Main>

            <Typography.Title fullWidth start styles={{alignSelf: "center", marginLeft: "calc(100% - 400px / 2)"}} color={theme.colors.info.error}>
                Ожидайте пожалуйста{points}
            </Typography.Title>
        </Container.Flex>
    );
};

export default OfferPending;
