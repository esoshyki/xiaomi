import Container from "../ui/Container";
import Typography from "../ui/Typography";

const Bearer = () => {

    return (
        <Container.Flex justify="center" fullHeight fullWidth alignItems="center">
            <Typography.Error styles={{
                fontSize: "2rem",
                textAlign: "center"
            }}>
                Для просмотра этой страницы войдите
            </Typography.Error>
        </Container.Flex>
    )
};

export default Bearer