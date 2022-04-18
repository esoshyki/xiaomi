import Typography from "../ui/Typography";
import Card from "../ui/Card";

import Container from "../ui/Container";
import ToolTip from "../ui/Tooltip/Tooltip";

const ThemeTooltips = () => {
    return (
        <Card>
            <Typography.H4 styles={{ marginTop: 0 }}>Тултипы</Typography.H4>
            <Container.Flex direction="row" justify="around">
                <ToolTip text="Сверху" side="up" >
                    <Typography.H4
                        styles={{
                            userSelect: "none",
                        }}
                    >
                        Сверху
                    </Typography.H4>
                </ToolTip>
                <ToolTip text="Слева" side="left">
                    <Typography.H4
                        styles={{
                            userSelect: "none",
                        }}
                    >
                        Слева
                    </Typography.H4>
                </ToolTip>
                <ToolTip text="Подсказка справа" side="right">
                    <Typography.H4
                        styles={{
                            userSelect: "none",
                        }}
                    >
                        Справа
                    </Typography.H4>
                </ToolTip>
                <ToolTip text="Подсказка снизу" styles={{
                    minWidth: "150px"
                }}>
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
