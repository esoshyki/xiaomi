import { useTheme } from "styled-components";
import { Button, Container, Typography } from "../ui";

interface PrePriceProps {
    price: number
    currency: string
    onClick: () => void
}

const OrderPrePrice = (props: PrePriceProps) => {
    
    const { price, currency, onClick } = props;

    const theme = useTheme();

    return (
        <Container.Flex verticalGap={20}>
            <Typography.Title color={theme.colors.text.secondary}>
                Предварительная оценка
            </Typography.Title>

            <Typography.RublesLarge>
                {`≈ ${price} ${currency}`}
            </Typography.RublesLarge>

            <Button onClick={onClick} fullWidth>
                К финальной стоимости 
            </Button>

        </Container.Flex>
    )
}

export default OrderPrePrice