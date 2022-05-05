import { KeyboardEvent, useState } from "react";
import { useOfferData } from "../../hooks/useOfferData";
import { Info } from "../ui";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";

interface OfferImeiProps {
    hint: boolean
    setHint: (value: boolean) => void
}

const OfferImei = ({ hint, setHint } : OfferImeiProps) => {

    const { loading, checkImei } = useOfferData();

    const [IMEI, setImei] = useState("");

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            checkImei(IMEI)
        }
    }

    return (
        <Container.Flex verticalGap={10} fullWidth styles={{ transition: "all 500ms ease-in" }}> 
            <Typography.Title textAlign="start" styles={{ width: "100%", margin: 0 }}>
                Я хочу сдать
            </Typography.Title>

            <Input
                value={IMEI}
                fullWidth
                placeholder="Укажите IMEI устройства"
                onChange={(e) => setImei(e.target.value)}
                onFocus={() => setHint(false)}
                breakpoints={{
                    600: {
                        width: "100%",
                    },
                }}
                onKeyPress={onKeyPress}
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
