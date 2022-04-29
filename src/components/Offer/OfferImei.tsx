import { useState } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import { Info } from "../ui";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";
import theme from "@storybook/addon-interactions/dist/ts3.4/theme";

interface OfferImeiProps {
    hint: boolean
    setHint: (value: boolean) => void
}

const OfferImei = ({ hint, setHint } : OfferImeiProps) => {

    const { loading, checkImei } = useOfferData();

    const [IMEI, setImei] = useState("");

    return (
        <Container.Flex verticalGap={16} alignItems="stretch" fullWidth styles={{ transition: "all 500ms ease-in" }}>
            <Typography.TitleSecondary
                textAlign="start"
                styles={{ margin: "0 4px 8px" }}>
                Я хочу сдать
            </Typography.TitleSecondary>

            <Input
                value={IMEI}
                fullWidth
                placeholder="Укажите IMEI устройства"
                onChange={(e) => setImei(e.target.value)}
                onFocus={() => setHint(false)}
            />

            {!hint && <Button
                withLoader
                pending={loading}
                onClick={() => checkImei(IMEI)}
                fullWidth
            >
                Проверить
            </Button>}

            <Info>
                Чтобы узнать IMEI откройте приложение «Телефон» и наберите
                USSD-команду *#06#
            </Info>
        </Container.Flex>
    );
};

export default OfferImei;
