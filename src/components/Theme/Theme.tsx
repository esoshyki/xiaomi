import Button from "../ui/Button";
import { Container } from "../ui/Container";

const Theme = () => {
    return (
        <Container fullWidth padding={20}>
            <Container
                direction="row"
                justify="around"
                styles={{
                    minWidth: "700px",
                }}
            >
                <Button styles={{ minWidth: "200px" }} onClick={() => {}}>
                    Обычная
                </Button>
                <Button variant="secondary" styles={{ minWidth: "200px" }} onClick={() => {}}>
                    Вторичная
                </Button>
            </Container>
        </Container>
    );
};

export default Theme;
