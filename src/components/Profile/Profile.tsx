import { useTheme } from "styled-components"
import { Container } from "../ui"
import ProfileMenu from "./ProfileMenu"
import ProfileRostokCount from "./ProfileRostokCount"
import ProfileTop from "./ProfileTop"

const Profile = () => {

    const theme = useTheme()

    return (
        <Container.Flex styles={{color: theme.colors.text.secondary}} fullWidth verticalGap={24} >
            <ProfileTop />
            <ProfileMenu />
            <ProfileRostokCount />
        </Container.Flex>
    )
}

export default Profile