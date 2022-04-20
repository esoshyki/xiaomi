import Theme from "../components/Theme"
import Container from "../components/ui/Container"
import Typography from "../components/ui/Typography"
import { withLayout } from "../hooks/withLayout"


const ThemePage = () => {

    return (
        <Container.Flex fullWidth padding={30} >
            <Typography.H2>Тема</Typography.H2>
            <Theme />
            
        </Container.Flex>
    )
}

export default withLayout(ThemePage, "Тема")