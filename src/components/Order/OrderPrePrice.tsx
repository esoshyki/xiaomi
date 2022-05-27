import { useTheme } from "styled-components";
import { OrderItem } from "../../store/orderSlice/types";
import OfferCard from "../Offer/OfferCard";
import OfferLayout from "../Offer/OfferLayout";
import OrderDevice from "../Offer/OrderDevice";
import { Button, Container, Typography } from "../ui";

interface PrePriceProps {
    itemData: OrderItem
    currency: string
    onClick: () => void;
}

const OrderPrePrice = (props: PrePriceProps) => {
    const { itemData, onClick, currency } = props;

    const theme = useTheme();

    return (
            <Container.Flex fullWidth alignItems="stretch" verticalGap={12}>

                <OrderDevice data={itemData}/>

                <Typography.Title
                    textAlign="start"
                    margin="0 0 8px"
                    padding="0 4px"
                    color={theme.colors.text.secondary}
                >
                    Предварительная оценка
                </Typography.Title>

                <Typography.RublesLarge margin={"0 0 12px"}>
                    {`≈ ${itemData.price} ${currency}`}
                </Typography.RublesLarge>

                <Button onClick={onClick}>К финальной стоимости</Button>
            </Container.Flex>
    );
};

export default OrderPrePrice;
