import React from "react"
import Offer from "../components/Offer"
import Container from "../components/ui/Container"
import { withLayout } from "../hooks/withLayout"

const Home = () => {

    return (
        <Container.Flex fullWidth fullHeight justify="center">
            <Offer />
        </Container.Flex>
    )
}

export default withLayout(Home, "Главная")