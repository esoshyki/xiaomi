import { Box, Button, Container, Info, Typography } from "../ui";
import QRCode from "react-qr-code";
import { useOfferData } from "./hooks/useOfferData";

const OfferQR = () => {
    const { changeStep } = useOfferData();
    return (
        <Container.Flex fullWidth alignItems="start">
            <Typography.Title>Фото устройства</Typography.Title>

            <Typography.Main>
                Возьмите другой смартфон, отсканируйте QR-код и в соответствии
                с подсказками сделайте фото
            </Typography.Main>

            <Box
                margin={"0 auto 26px auto"}
                styles={{
                    width: "140px",
                    height: "140px",
                    alignSelf: "center",
                }}
            >
                <QRCode value="bubenchiki" size={140} />
            </Box>

            <Info>
                После загрузки фото, данные на этой странице обновятся
                автоматически
            </Info>

            <Button
                variant="outline"
                fullWidth
                margin={"20px 0 0"}
                onClick={() => changeStep("cost-confirm")}
            >
                Назад
            </Button>
        </Container.Flex>
    );
};

export default OfferQR;
