import React, { useEffect, useMemo } from "react"
import Offer from "../components/Offer"
import { withLayout } from "../components/Layout/withLayout"
import { useLocation, useParams } from "react-router-dom"
import useOrderData from "../hooks/useOrderData"

const OrderPage = () => {

    const { orderNumber, deviceId } = useParams();
    const { search } = useLocation();

    const { getOrderData } = useOrderData();

    useEffect(() => getOrderData(orderNumber, deviceId), [orderNumber, deviceId])

    return (
        <>{`Order number ${orderNumber}; deviceId: ${deviceId}; search: ${search}`}</>
    )
}

export default withLayout(OrderPage, "Главная")