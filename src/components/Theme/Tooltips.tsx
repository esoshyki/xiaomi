import Typography from "../ui/Typography";
import Card from "../ui/Card";

import Container from "../ui/Container";
import ToolTip from "../ui/Tooltip/Tooltip";
import Button from "../ui/Button";

const ThemeTooltips = () => {
    return (
        <Card>
            <Typography.H4 styles={{ marginTop: 0 }}>Тултипы</Typography.H4>
            <Container.Flex direction="row" justify="start" wrap mobile={{
                flexDirection: "column",
                alignItems: "center"
            }}>
                <ToolTip text="Сверху" side="up">
                    <Typography.H4
                        styles={{
                            userSelect: "none",
                            marginRight: "30px",
                        }}
                    >
                        Сверху
                    </Typography.H4>
                </ToolTip>
                <ToolTip text="Слева" side="left">
                    <Typography.H4
                        styles={{
                            userSelect: "none",
                            marginRight: "30px",
                        }}
                    >
                        Слева
                    </Typography.H4>
                </ToolTip>
                <ToolTip text="Подсказка справа" side="right">
                    <Button
                        onClick={() => {}}
                        styles={{ width: "200px", marginRight: "30px" }}
                    >
                        Справа
                    </Button>
                </ToolTip>
                <ToolTip
                    text="Подсказка снизу"
                    styles={{
                        minWidth: "150px",
                    }}
                >
                    <Typography.H4
                        styles={{
                            userSelect: "none",
                        }}
                    >
                        Снизу
                    </Typography.H4>
                </ToolTip>
            </Container.Flex>
        </Card>
    );
};

export default ThemeTooltips;
