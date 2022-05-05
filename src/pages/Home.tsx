import React from "react"
import Offer from "../components/Offer"
import { withLayout } from "../components/Layout/withLayout"

const Home = () => {

    return (
        <Offer />
    )
}

export default withLayout(Home, "Главная")