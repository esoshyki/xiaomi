import { useTheme } from "styled-components"
import useQuery from "../../hooks/useQuery"
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon"

const AddNewDevice = () => {

    const { orderNumber, redirect } = useQuery();

    console.log(orderNumber);

    const redirectPath = "/create/" + orderNumber

    const theme = useTheme();
    const color = theme.colors.link.default;

    return (
        <Card onClick={redirect(redirectPath)} fullWidth padding={"28px 40px"} hoverStyles={{
            cursor: "pointer"
        }}>
            <Container.Flex direction="row" horizontalGap={10} margin="auto" justify="center">
                <Icon name="add-plus" color={color}/>
                <Typography.Main color={color} margin={0}>
                    ДОБАВИТЬ УСТРОЙСТВО
                </Typography.Main>
            </Container.Flex>    
        </Card>
    )
}

export default AddNewDevice