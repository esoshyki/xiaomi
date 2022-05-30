import { useTheme } from "styled-components";
import { Button, Card, Container, Info, Price, Typography } from "../ui";

interface OfferOrderingProps {
    count?: number;
    amount: number;
    currency: string;
}

const Line = ({
    label,
    amount,
    currency,
    text
}: {
    label: string;
    amount?: number;
    currency?: string;
    text?: string;
}) => {
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

            <Price amount={amount} currency={currency} text={text}/>
        </Container.Flex>
    );
};

const OfferOrdering = ({
    count,
    amount,
    currency,
}: OfferOrderingProps) => {
    const theme = useTheme();

    const tradInAmount = amount;
    const buyOutAmount = amount * 0.75;

    return (
        <Card padding={28} fullWidth>
            <Container.Flex fullWidth alignItems="start" verticalGap={15}>
                <Typography.Title color={theme.colors.text.secondary}>
                    Оформление
                </Typography.Title>

                <Container.Flex verticalGap={8}>
                    <Line
                        label="Количество: "
                        text={count ? ` ${count} шт` : " не указана"}
                    />
                    <Line
                        label="Скидка по «Трейд-ин»: "
                        amount={tradInAmount}
                        currency={currency}
                    />

                    <Line
                        label="Скидка для «Выкупа»: "
                        amount={buyOutAmount}
                        currency={currency}
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
