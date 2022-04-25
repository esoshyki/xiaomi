import { useState } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";

const OfferImei = () => {
    const { loading, checkImei } = useOfferData();

    const [IMEI, setImei] = useState("");

    return (
        <Card fullWidth>
            <Container.Flex>
                <Typography.H4 textAlign="start" styles={{ width: "100%" }}>
                    Я хочу сдать
                </Typography.H4>

                <Input
                    value={IMEI}
                    fullWidth
                    placeholder="Укажите IMEI устройства"
                    onChange={(e) => setImei(e.target.value)}
                />

                <Button
                    withLoader
                    pending={loading}
                    onClick={() => checkImei(IMEI)}
                    fullWidth
                >
                    Проверить
                </Button>
            </Container.Flex>
        </Card>
    );
};

export default OfferImei;
