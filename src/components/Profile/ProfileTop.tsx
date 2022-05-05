import { useAuth } from "../../hooks/useAuth"
import Image from "../Image";
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon";

const ProfileTop = () => {

    const { user: userData } = useAuth();
    const { user } = userData;

    return (
        <Card fullWidth padding={28} styles={{padding: "28px"}}>
            {user && <Container.Grid alignItems="center" justify="start" rows="1fr" cols="60px auto">
                {!!user.image && <Image src={user.image} width="60px" height="60px" />}
                {!user.image && <Icon name="user" width={25} height={25} styles={{
                    width: "60px",
                    height: "60px",
                }} />}

                <Container.Flex styles={{padding: "0 28px"}} alignItems="start">
                    <Typography.Small>С возвращением</Typography.Small>
                    <Typography.Title start>{user.userName ?? "Неизвестный Человек"}</Typography.Title>
                </Container.Flex>
                </Container.Grid>}
        </Card>
    )
}

export default ProfileTop