import { Card, Container, Image, Typography } from "../ui"
import RostokImage from '../../assets/rostock60.png'
import { useTheme } from "styled-components"
import { useAuth } from "../../hooks/useAuth"

const ProfileRostokCount = () => {

    const { user } = useAuth()

    const theme = useTheme()

    return (
        <Card fullWidth padding={28} styles={{
            backgroundColor: theme.colors.background.first,
        }}>
            <Container.Flex direction="row">
                <Image noBasePath src={RostokImage} alt="rostok" width={60} height={60} margin={"0 12px 0 0"}/>

                <Container.Flex alignItems="start">
                    <Typography.Small margin={0}>
                        Всего собрано ростков
                    </Typography.Small>
                    <Typography.Title margin={0}>
                        {"x "}{user?.rostokCount ?? 0}
                    </Typography.Title>
                </Container.Flex>
            </Container.Flex>
        </Card>
    )
}

export default ProfileRostokCount