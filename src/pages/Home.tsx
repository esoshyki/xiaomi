import React from "react"
import Container from "../components/ui/Container"
import Typography from "../components/ui/Typography"
import { withLayout } from "../hooks/withLayout"

const Home = () => {

    return (
        <Container.Flex fullWidth fullHeight justify="center">
            <Typography.H1>
                Главная
            </Typography.H1>
        </Container.Flex>
    )
}

export default withLayout(Home, "Главная")