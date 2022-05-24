import { useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { OrderItem } from "../../store/orderSlice/types";
import OfferLoader from "../Offer/OfferLoader";
import { Container, Typography } from "../ui";

interface OrderItemSummaryProps {
    data: OrderItem
    getItemStatus: () => void
    isLoading: boolean
}

const OrderItemSummary = (props: OrderItemSummaryProps) => {
    const theme = useTheme();
    const { data, getItemStatus, isLoading } = props;
    const { status } = data;

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(getItemStatus, 10000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <Container.Flex>
            {status !== "complete" && (
                <Typography.Title color={theme.colors.text.secondary}>
                    Подтверждение стоимости
                </Typography.Title>
            )}

            {status !== "complete" && (
                <Typography.Main>
                    Сейчас происходит проверка предоставленных вами данных.
                    Время проверки не превышает 5 минут
                </Typography.Main>
            )}

            {status !== "complete" && (
                <Typography.Title color={theme.colors.info.error} styles={{
                    opacity: isLoading ? "0" : "1",
                    transition: "opacity 100ms ease-in"
                }}>
                    Ожидайте пожалуйста
                </Typography.Title>
            )}

        </Container.Flex>
    );
};

export default OrderItemSummary;
