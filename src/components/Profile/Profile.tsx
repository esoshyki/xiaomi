import { useTheme } from "styled-components"
import { Container } from "../ui"
import ProfileMenu from "./ProfileMenu"
import ProfileTop from "./ProfileTop"

const Profile = () => {

    const theme = useTheme()

    return (
        <Container.Flex styles={{maxWidth: "312px", color: theme.colors.text.secondary}} fullWidth verticalGap={20}>
            <ProfileTop />
            <ProfileMenu />
        </Container.Flex>
    )
}

export default Profile