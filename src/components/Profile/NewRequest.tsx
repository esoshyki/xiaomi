import { useTheme } from "styled-components"
import { Container } from "../ui"
import ProfileMenu from "./ProfileMenu"
import ProfileRostokCount from "./ProfileRostokCount"
import ProfileTop from "./ProfileTop"


const NewRequest = () => {

    const theme = useTheme()
    return (
        <Container.Flex fullWidth alignItems="stretch" horizontalGap={36}>
            <Container.Flex  verticalGap={24} >
                Редактирование
                <ProfileTop />
                <ProfileMenu />
                <ProfileRostokCount />
            </Container.Flex>

        </Container.Flex>
    )
}

export default NewRequest