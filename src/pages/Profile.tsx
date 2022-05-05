import Container from "../components/ui/Container"
import Typography from "../components/ui/Typography"
import { withLayout } from "../components/Layout/withLayout"
import Profile from "../components/Profile"


const ThemePage = () => {

    return (
        <Container.Flex fullWidth >
            <Typography.Title>Профиль</Typography.Title>
            <Profile />
        </Container.Flex>
    )
}

export default withLayout(ThemePage, "Профиль", true)