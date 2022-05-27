import { useTheme } from "styled-components";
import { Button, Card, Container, Info, Typography } from "../ui";

interface OfferOrderingProps {
    count?: number;
    tradInAmount: string;
    buyOutAmount?: string;
    currency: string;
}

const Line = ({ label, value }: { label: string; value: string }) => {
    const theme = useTheme();

    return (
        <Container.Flex direction="row" justify="start" fullWidth>
            <Typography.Tertiary
                color={theme.colors.text.tertiary}
                styles={{
                    fontSize: "14px",
                    marginRight: "10px",
                }}
            >
                {label}
            </Typography.Tertiary>

            <Typography.Small
                color={theme.colors.text.default}
                styles={{
                    fontSize: "14px",
                    fontWeight: 700,
                }}
            >
                {value}
            </Typography.Small>
        </Container.Flex>
    );
};

const OfferOrdering = ({
    count,
    tradInAmount,
    buyOutAmount,
    currency,
}: OfferOrderingProps) => {
    const theme = useTheme();

    const _buyOutAmount = buyOutAmount ?? tradInAmount;

    return (
        <Card padding={28} fullWidth>
            <Container.Flex fullWidth alignItems="start" verticalGap={15}>
                <Typography.Title color={theme.colors.text.secondary}>
                    Оформление
                </Typography.Title>

                <Container.Flex>
                    <Line
                        label="Количество: "
                        value={count ? ` ${count} шт` : " не указана"}
                    />
                    <Line
                        label="Скидка по «Трейд-ин»: "
                        value={
                            tradInAmount
                                ? ` ${tradInAmount} ${currency}`
                                : " не указана"
                        }
                    />

                    <Line
                        label="Скидка для «Выкупа»: "
                        value={
                            tradInAmount
                                ? ` ${tradInAmount} ${currency}`
                                : " не указана"
                        }
                    />
                </Container.Flex>

                <Button fullWidth>ОФОРИТЬ ТРЕЙД-ИН</Button>

                <Button variant="outline" fullWidth>
                    ОФОРМИТЬ ВЫКУП
                </Button>

                <Info>
                    Трейд-ин — это программа предаставляющая указанную скидку
                    на покупку товара у партнёров Выкуп — это программа
                    по выкупу товара за наличные
                </Info>
            </Container.Flex>
        </Card>
    );
};

export default OfferOrdering;
