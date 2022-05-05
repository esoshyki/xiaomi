import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon"
import { Icons } from "../ui/Icon/types"
import { useNavigate } from 'react-router-dom'
import { useTheme } from "styled-components"

interface LinkProps {
    title: string
    icon: Icons
    onClick?: () => void
}

const Link = (props: LinkProps) => {
    const { title, icon, onClick } = props;
    const theme = useTheme();

    const [hover, setHover] = useState(false);



    return (
        <Container.Flex
            direction="row"
            onClick={onClick}
            fullWidth
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            hoverStyles={{ cursor: "pointer", color: theme.colors.text.contrast }}>
            <Icon color={hover ? theme.colors.link.default : undefined} name={icon} styles={{ marginRight: "22px" }} />
            <Typography.Medium color={hover ? theme.colors.link.default : undefined}>{title}</Typography.Medium>
        </Container.Flex>
    )
}

const ProfileMenu = () => {

    const { logout, isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth])

    const links: LinkProps[] = [
        { title: "Настройка партнёра", icon: "settings" },
        { title: "Сотрудники", icon: "employee" },
        { title: "Список заявок", icon: "order-list" },
        { title: "Новая заявка", icon: "new-order" },
        { title: "Помощь", icon: "help" },
        { title: "Выйти", icon: "exit", onClick: logout },
    ]

    return (
        <Card padding={0} fullWidth>
            <Container.Flex fullWidth padding={53}>
                {links.map((props, idx) => <Link key={idx} {...props} />)}
            </Container.Flex>
        </Card>
    )
}

export default ProfileMenu