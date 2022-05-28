import { useRef, useEffect, useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { GetItemStatus, getOrderItemData } from "../../store/orderSlice";
import { OrderItem } from "../../store/orderSlice/types";
import { Container, Typography } from "../ui";
import UploadProgress from "../ui/UploadProgress";
import OrderDevice from "./OrderDevice";

const OfferSummary = () => {
    const theme = useTheme();

    const { itemNumber, orderNumber } = useParams();
    const { orderData } = useSelector(getOrderItemData);

    const item = useMemo(() => {
        return orderData?.items.find(el => el.itemNumber === itemNumber)
    }, []);

    const dispatch = useDispatch();

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const status = useMemo(() => {
        return item?.status
    }, [item])

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            if (orderNumber) {
                dispatch(GetItemStatus.request({ itemNumber, orderNumber }))
            }
        }, 10000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <Container.Flex verticalGap={16} alignItems="stretch">

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
                    margin="0"
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

export default memo(OfferSummary);
