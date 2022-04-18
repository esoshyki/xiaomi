import React from "react"
import Container from "../components/ui/Container"
import { withLayout } from "../hooks/withLayout"

const Home = () => {

    return (
        <Container.Flex>
            Home
        </Container.Flex>
    )
}

export default withLayout(Home, "Главная")