import { useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { OrderItem } from "../../store/orderSlice/types";
import OfferLoader from "../Offer/OfferLoader";
import { Container, Typography } from "../ui";
import UploadProgress from "../ui/UploadProgress";

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
        <Container.Flex verticalGap={16}>
            {status !== "complete" && (
                <Typography.Title fullWidth textAlign="start" color={theme.colors.text.secondary} styles={{paddingLeft: "4px", paddingRight: "4px", marginBottom: "8px", marginTop: "0"}}>
                    Подтверждение стоимости
                </Typography.Title>
            )}

            {status !== "complete" && (
                <Typography.Main textAlign="start" styles={{paddingLeft: "4px", paddingRight: "4px", marginBottom: "6px", marginTop: "0"}}>
                    Сейчас происходит проверка предоставленных вами данных.
                    Время проверки не превышает 5 минут
                </Typography.Main>
            )}

            {status !== "complete" && (
                <Typography.Title color={theme.colors.info.error} styles={{
                    opacity: isLoading ? "0" : "1",
                    transition: "opacity 100ms ease-in",
                    margin: "0"
                }}>
                    Ожидайте пожалуйста
                </Typography.Title>
            )}

            {status !== "complete" &&
                <UploadProgress loadedLength={2}/>
            }

        </Container.Flex>
    );
};

export default OrderItemSummary;
