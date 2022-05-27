import { ReactNode } from "react"
import Container from "../Container"
import Icon from "../Icon"
import Typography from "../Typography"
import { useTheme } from "styled-components";

interface InfoProps {
    children: ReactNode
}

const Info = ({ children } : InfoProps) => {
    const theme = useTheme()
    return (
        <Container.Grid cols="20px 1fr" rows="1fr" gap={8}>
            <Icon name="info" color={theme.colors.icon.secondary}/>
            <Typography.Main fullWidth styles={{margin: "0"}} textAlign="start">{children}</Typography.Main>
        </Container.Grid>
    )
}

export default Info