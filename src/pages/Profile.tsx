import Container from "../components/ui/Container"
import Typography from "../components/ui/Typography"
import { withLayout } from "../components/Layout/withLayout"


const ThemePage = () => {

    return (
        <Container.Flex fullWidth >
            <Typography.Title>Профиль</Typography.Title>
           
        </Container.Flex>
    )
}

export default withLayout(ThemePage, "Профиль", true)