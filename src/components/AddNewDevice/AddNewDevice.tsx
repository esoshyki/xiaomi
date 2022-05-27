import { useTheme } from "styled-components"
import useQuery from "../../hooks/useQuery"
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon";

interface AddNewDeviceProps {
    onClick: () => void
}

const AddNewDevice = ({ onClick } : AddNewDeviceProps) => {

    const { orderNumber, redirect } = useQuery();

    const redirectPath = "/create/" + orderNumber

    const theme = useTheme();
    const color = theme.colors.link.default;

    const _onClick = () => {
        onClick();
        redirect(redirectPath)
    }

    return (
        <Card onClick={_onClick} fullWidth padding="28px" hoverStyles={{
            cursor: "pointer"
        }}>
            <Container.Flex
                direction="row"
                horizontalGap={4}
                alignItems="center"
                justify="center"
                styles={{
                minHeight: "220px"
            }} breakpoints={{
                660: {
                    minHeight: "0"
                }
            }}>
                <Icon name="add-plus" color={color}/>
                <Typography.Main color={color} margin={0} textAlign="start">
                    ДОБАВИТЬ УСТРОЙСТВО
                </Typography.Main>
            </Container.Flex>    
        </Card>
    )
}

export default AddNewDevice