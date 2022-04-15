import Theme from "../components/Theme"
import { Container } from "../components/ui/Container"
import Typography from "../components/ui/Typography"


const ThemePage = () => {

    return (
        <Container fullWidth padding={30} >
            <Typography.H2>Тема</Typography.H2>
            <Theme />
            
        </Container>
    )
}

export default ThemePage