import { Container, Img, Typography } from "../ui";
import DonePNG from "../../assets/done.png";
import { useTheme } from "styled-components";

const OfferPending = () => {
    const theme = useTheme();

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

            <Typography.Title styles={{alignSelf: "center"}} color={theme.colors.info.error}>
                Ожидайте пожалуйста
            </Typography.Title>
        </Container.Flex>
    );
};

export default OfferPending;
