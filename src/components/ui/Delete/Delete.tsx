import { useTheme } from "styled-components";
import { Card, Container, Overlay, Typography, Button } from "../";
import { styled } from "../../../helpers/styled";

interface DeleteProps {
    onDelete: () => void
    onCancel: () => void
}

const Delete = ({ onDelete, onCancel } : DeleteProps) => {

    const theme = useTheme();

    return (
        <Overlay padding={"156px 24px"} >
            <Card className="show" padding={28} styles={{maxWidth: "312px", backgroundColor: theme.colors.background.contrast}}>
                <Container.Flex verticalGap={16} alignItems="stretch">
                    <Typography.TitleSecondary textAlign="start" margin={"0 0 8px"} padding={"0 4px"}>Удаление</Typography.TitleSecondary>
                    <Typography.Main textAlign="start" margin={"0 0 6px"} padding={"0 4px"}>Вы точно хотите произвести удаление?</Typography.Main>

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
