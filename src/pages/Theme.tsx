import Theme from "../components/Theme"
import Container from "../components/ui/Container"
import Typography from "../components/ui/Typography"
import { withLayout } from "../components/Layout/withLayout"


const ThemePage = () => {

    return (
        <Container.Flex fullWidth padding={30} >
            <Typography.Title>Тема</Typography.Title>
            <Theme />
            
        </Container.Flex>
    )
}

export default withLayout(ThemePage, "Тема")