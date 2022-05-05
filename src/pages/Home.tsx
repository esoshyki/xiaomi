import React from "react"
import Offer from "../components/Offer"
import Container from "../components/ui/Container"
import { withLayout } from "../components/Layout/withLayout"

const Home = () => {

    return (
        <Container.Flex fullWidth fullHeight justify="center" styles={{transition: "500ms ease-in"}}>
            <Offer />
        </Container.Flex>
    )
}

export default withLayout(Home, "Главная")