import { Card, Select, Container } from "../ui";

const ThemeSelect = () => {
    return (
        <Card padding={20} fullWidth>
            <Container.Flex fullWidth styles={{ height: "300px" }}>
                <Select
                    options={[
                        { label: "Первый элемент", value: "first" },
                        { label: "Второй элемент", value: "second" },
                        { label: "Третий элемент", value: "third" },
                    ]}
                />
            </Container.Flex>
        </Card>
    );
};

export default ThemeSelect;
