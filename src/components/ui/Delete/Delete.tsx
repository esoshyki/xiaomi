import { useTheme } from "styled-components";
import { Card, Container, Overlay, Typography, Button } from "../";

interface DeleteProps {
    onDelete: () => void
    onCancel: () => void
}

const Delete = ({ onDelete, onCancel } : DeleteProps) => {

    const theme = useTheme();

    return (
        <Overlay padding={"156px 24px"} >
            <Card padding={28} styles={{maxWidth: "312px", background: theme.colors.background.contrast}}>
                <Container.Flex>
                    <Typography.Title>Удаление</Typography.Title>
                    <Typography.Main>Вы точно хотите произвести удаление?</Typography.Main>

                    <Container.Grid rows="1fr" cols="1fr 1fr" gap={16} fullWidth>
                        <Button variant="danger" fullWidth onClick={onDelete}>Удалить</Button>
                        <Button fullWidth onClick={onCancel}>Отмена</Button>
                    </Container.Grid>
                </Container.Flex>
            </Card>
        </Overlay>
    );
};

export default Delete;
