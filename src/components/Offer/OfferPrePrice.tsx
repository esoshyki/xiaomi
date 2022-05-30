import { useTheme } from "styled-components";
import { OrderItem } from "../../store/orderSlice/types";
import OrderDevice from "./OrderDevice";
import { Button, Container, Typography } from "../ui";
import { Fragment } from "react";

interface PrePriceProps {
    itemData?: OrderItem
    currency?: string
    onClick?: () => void;
}

const OfferPrePrice = (props: PrePriceProps) => {
    const { itemData, onClick, currency } = props;

    const theme = useTheme();

    return (
            <Container.Flex fullWidth alignItems="stretch" verticalGap={12} margin={"16px 0 0 0"}>

                {itemData && currency && (
                    <Fragment>
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
                    </Fragment>)}

                <Button onClick={onClick}>К финальной стоимости</Button>
            </Container.Flex>
    );
};

export default OfferPrePrice;
