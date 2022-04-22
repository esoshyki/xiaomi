import { useState } from "react";
import styled from "styled-components";
import { useOfferData } from "../../hooks/useOfferData";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Typography from "../ui/Typography";

const OfferImeiWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const OfferImei = () => {
    const [IMEI, setIMEI] = useState(useOfferData().IMEI || "");

    const check = () => {}

    return (
        <OfferImeiWrapper>
            <Container.Flex fullHeight fullWidth>
                <Card styles={{ maxWidth: "700px", minWidth: "400px" }}>
                    <Container.Flex>
                        <Typography.H4
                            textAlign="start"
                            styles={{ width: "100%" }}
                        >
                            Я хочу сдать
                        </Typography.H4>

                        <Input
                            fullWidth
                            value={IMEI}
                            placeholder="Укажите IMEI устройства"
                            onChange={(e) => setIMEI(e.target.value)}
                        />

                        <Button onClick={check} fullWidth>Проверить</Button>
                    </Container.Flex>
                </Card>
            </Container.Flex>
        </OfferImeiWrapper>
    );
};

export default OfferImei;
