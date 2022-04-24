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

    const { loading, checkImei } = useOfferData()

    const [IMEI, setImei] = useState("");

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
                            value={IMEI}
                            fullWidth
                            placeholder="Укажите IMEI устройства"
                            onChange={e => setImei(e.target.value)}
                        />

                        <Button withLoader pending={loading} onClick={() => checkImei(IMEI)} fullWidth>Проверить</Button>
                    </Container.Flex>
                </Card>
            </Container.Flex>
        </OfferImeiWrapper>
    );
};

export default OfferImei;
