import { useOfferData } from "../../hooks/useOfferData";
import { Button, Container, Typography } from "../ui";

const OfferCostConfirm = () => {

    const { changeStep } = useOfferData();

    return (
        <Container.Flex fullWidth alignItems="start">
            <Typography.Title>Подтвержение стоимости</Typography.Title>

            <Typography.Main textAlign="start">
                Для подтверждения стоимости вам необходимо прислать 2 фото
                оцениваемого устройства.
                <br />
                <br />
                Данную оценку вы делаете с оцениваемого устройства?
            </Typography.Main>

            <Container.Grid rows="1fr" cols="1fr 1fr" gap={16} fullWidth>
                <Button
                    styles={{ maxWidth: "120px", height: "40px" }}
                    variant="outline"
                    fullWidth
                    onClick={() => changeStep("photo-front")}
                >
                    Нет
                </Button>
                <Button
                    fullWidth
                    styles={{ maxWidth: "120px", height: "40px" }}
                    variant="outline"
                    onClick={() => changeStep("qr-code")}
                >
                    Да
                </Button>
            </Container.Grid>
        </Container.Flex>
    );
};

export default OfferCostConfirm;
