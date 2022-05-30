import { withLayout } from "../components/Layout/withLayout";
import { Container, Typography } from "../components/ui";

const NotFound = () => {

    return (
        <Container.Flex fullHeight fullWidth justify="center">
            <Typography.Title>
                Страница не найдена
            </Typography.Title>
        </Container.Flex>
    )
};

export default withLayout(NotFound, "404")