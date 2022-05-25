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
        <Container.Flex fullWidth alignItems="stretch" verticalGap={12}>
            <Typography.Title textAlign="start" margin="0 0 8px" padding="0 4px" color={theme.colors.text.secondary}>
                Предварительная оценка
            </Typography.Title>

            <Typography.RublesLarge margin={"0 0 12px"}>
                {`≈ ${price} ${currency}`}
            </Typography.RublesLarge>

            <Button onClick={onClick}>
                К финальной стоимости 
            </Button>

        </Container.Flex>
    )
}

export default OrderPrePrice