import Typography from "../ui/Typography";
import Card from "../ui/Card";

import Container from "../ui/Container";
import ToolTip from "../ui/Tooltip/Tooltip";
import Button from "../ui/Button";

const ThemeTooltips = () => {
    return (
        <Card padding={20} styles={{overflow: "visible", zIndex: 5}}>
            <Typography.Title styles={{ marginTop: 0 }}>Тултипы</Typography.Title>
            <Container.Flex direction="row" justify="start" wrapped breakpoints={{
                "600": {
                    flexDirection: "column",
                    alignItems: "center"
                }
            }}>
                <ToolTip text="Сверху" side="up">
                    <Typography.Title
                        styles={{
                            userSelect: "none",
                            marginRight: "30px",
                        }}
                    >
                        Сверху
                    </Typography.Title>
                </ToolTip>
                <ToolTip text="Слева" side="left">
                    <Typography.Title
                        styles={{
                            userSelect: "none",
                            marginRight: "30px",
                        }}
                    >
                        Слева
                    </Typography.Title>
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
                    <Typography.Title
                        styles={{
                            userSelect: "none",
                        }}
                    >
                        Снизу
                    </Typography.Title>
                </ToolTip>
            </Container.Flex>
        </Card>
    );
};

export default ThemeTooltips;
