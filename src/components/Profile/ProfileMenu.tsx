import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon"
import { Icons } from "../ui/Icon/types"
import { useNavigate } from 'react-router-dom'

interface LinkProps {
    title: string
    icon: Icons
    onClick?: () => void
}

const Link = (props: LinkProps) => {
    const { title, icon, onClick } = props;

    return (
        <Container.Flex direction="row" onClick={onClick} fullWidth hoverStyles={{cursor: "pointer"}}>
            <Icon name={icon} styles={{marginRight: "22px"}}/>
            <Typography.Medium>{title}</Typography.Medium>
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
        { title: "Настройка партнёра", icon: "info" },
        { title: "Сотрудники", icon: "info" },
        { title: "Список заявок", icon: "info" },
        { title: "Новая заявка", icon: "info" },
        { title: "Помощь", icon: "info" },
        { title: "Выйти", icon: "info", onClick: logout },
    ]
    
    return (
        <Card padding={0} fullWidth>
            <Container.Flex fullWidth padding={53}>
                {links.map((props, idx) => <Link key={idx} {...props}/>)}
            </Container.Flex>
        </Card>
    )
}

export default ProfileMenu