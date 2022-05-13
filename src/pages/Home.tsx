import React, { memo, useEffect } from "react"
import Offer from "../components/Offer"
import { withLayout } from "../components/Layout/withLayout"

const Home = () => {

    return (
        <Offer />
    )
}

export default memo(withLayout(Home, "Главная"))