import { ReactNode } from "react"
import Container from "../Container"
import Icon from "../Icon"
import Typography from "../Typography"

interface InfoProps {
    children: ReactNode
}

const Info = ({ children } : InfoProps) => {

    return (
        <Container.Grid cols="35px auto" rows="1fr">
            <Icon name="info" />
            <Container.Flex fullWidth>
                <Typography.Main styles={{margin: "0"}} textAlign="start">{children}</Typography.Main>
            </Container.Flex>
        </Container.Grid>
    )
}

export default Info