import { useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { OrderItem } from "../../store/orderSlice/types";
import { Container, Typography } from "../ui";
import UploadProgress from "../ui/UploadProgress";
import OrderDevice from "./OrderDevice";

interface OfferItemSummaryProps {
    getItemStatus: () => void;
    isLoading: boolean;
    item: OrderItem;
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
                <Typography.Title
                    fullWidth
                    textAlign="start"
                    color={theme.colors.text.secondary}
                    styles={{
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        marginBottom: "8px",
                        marginTop: "0",
                    }}
                >
                    Подтверждение стоимости
                </Typography.Title>
            )}

            {status !== "complete" && (
                <Typography.Main
                    textAlign="start"
                    styles={{
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        marginBottom: "6px",
                        marginTop: "0",
                    }}
                >
                    Сейчас происходит проверка предоставленных вами данных.
                    Время проверки не превышает 5 минут
                </Typography.Main>
            )}

            {status !== "complete" && (
                <Typography.Title
                    color={theme.colors.info.error}
                    styles={{
                        transition: "opacity 100ms ease-in",
                    }}
                >
                    Ожидайте пожалуйста
                </Typography.Title>
            )}

            {status !== "complete" && <UploadProgress loadedLength={2} />}
        </Container.Flex>
    );
};

export default OfferSummary;
