import React from "react"
import Offer from "../components/Offer"
import { withLayout } from "../components/Layout/withLayout"
import { useParams } from "react-router-dom"

const OrderPage = () => {

    const { orderNumber, deviceId } = useParams();

    console.log(orderNumber, deviceId )

    return (
        <>{`Order number ${orderNumber}; deviceId: ${deviceId}`}</>
    )
}

export default withLayout(OrderPage, "Главная")