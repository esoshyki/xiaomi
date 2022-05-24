import { useTheme } from "styled-components";
import { useOfferData } from "../../hooks/useOfferData";
import { Button, Container, Typography } from "../ui";

const OfferPreliminary = () => {
    const { changeStep } = useOfferData();
    const theme = useTheme();

    return (
        <Container.Flex fullWidth alignItems="start">
            <Typography.Small
                fullHeight
                textAlign="end"
                fullWidth
                color={theme.colors.link.default}
                hoverStyles={{ cursor: "pointer" }}
                onClick={() => changeStep("summary")}
            >
                Изменить
            </Typography.Small>
            <Typography.Title start>Предварительная оценка</Typography.Title>

            <Typography.RublesLarge styles={{alignSelf: "center"}}>≈ 317,00 руб</Typography.RublesLarge>

            <Button fullWidth onClick={() => changeStep("photo-front")} margin={"20px 0 0"}>
                К ФИНАЛЬНОЙ СТОИМОСТИ
            </Button>
        </Container.Flex>
    );
};

export default OfferPreliminary;
