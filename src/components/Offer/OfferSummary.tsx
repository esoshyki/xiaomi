import { useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { OrderItem } from "../../store/orderSlice/types";
import { Container, Typography } from "../ui";
import OrderDevice from "./OrderDevice";

interface OfferItemSummaryProps {
    getItemStatus: () => void
    isLoading: boolean
    item: OrderItem
}

const OfferSummary = (props: OfferItemSummaryProps) => {
    const theme = useTheme();
    const { getItemStatus, isLoading, item } = props;

    const { status } = item;

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

            <OrderDevice data={item} />

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

export default OfferSummary;
