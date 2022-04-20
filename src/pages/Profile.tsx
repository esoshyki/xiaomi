import Container from "../components/ui/Container"
import Typography from "../components/ui/Typography"
import { withLayout } from "../hooks/withLayout"


const ThemePage = () => {

    return (
        <Container.Flex fullWidth padding={30} >
            <Typography.H2>Профиль</Typography.H2>
           
        </Container.Flex>
    )
}

export default withLayout(ThemePage, "Профиль", true)