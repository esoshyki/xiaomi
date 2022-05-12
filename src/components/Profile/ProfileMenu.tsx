import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon"
import { Icons } from "../ui/Icon/types"
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components"
import styled from "styled-components/macro";

interface LinkProps {
    title: string
    icon: Icons
    onClick?: () => void
    href?: string
}

const LinkWrapper = styled.a<{ active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
	color: ${props => props.active ? props.theme.colors.link.default : props.theme.colors.text.secondary};
    
    &:hover {
        cursor: pointer;
		color: ${(props) => props.theme.colors.link.default};
    }
    
    &::after {
		position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
		width: 4px;
		display: ${props => props.active ? "block" : "none"};
        background-color: currentColor;
        content: '';
    }
`;

const Link = (props: LinkProps) => {
    const { title, icon, onClick, href } = props;
    const theme = useTheme();

    const [hover, setHover] = useState(false);
    const location = useLocation();

    return (
        <LinkWrapper onClick={onClick} href={href} active={props.href === location.pathname}>
            <Icon color="currentColor" name={icon} styles={{ marginRight: "16px" }} />
            <Typography.Main color="currentColor" margin={0} styles={{fontWeight: "500"}}>
                <span dangerouslySetInnerHTML={{__html: title}} />
            </Typography.Main>
        </LinkWrapper>
    )
}
const ProfileMenu = () => {
    const { logout, isAuth, user} = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth])

    const links: LinkProps[] =/* (!!user && typeof user.isPartner === "undefined") ?
        [
            { title: "Список заявок", icon: "order-list", href: "/profile/requests" },
            { title: "Новая заявка", icon: "new-order", href: "/profile/new_request" },
            { title: "Помощь", icon: "help", href: "/help" },
            { title: "Выйти", icon: "exit", onClick: logout }
        ] :*/
        [
            { title: "Настройка <span class='hidden-mobile'>партнёра</span>", icon: "settings", href: "/profile/settings" },
            { title: "Сотрудники", icon: "employee", href: "/profile/employees" },
            { title: "Список заявок", icon: "order-list", href: "/profile/requests" },
            { title: "Новая заявка", icon: "new-order", href: "/profile/new_request" },
            { title: "Помощь", icon: "help", href: "/help" },
            { title: "Выйти", icon: "exit", onClick: logout },
        ];


    return (
        <Card padding={0} fullWidth>
            <Container.Flex fullWidth alignItems="start" styles={{padding: "48px 0 48px 52px"}} verticalGap={36}>
                {links.map((props, idx) => <Link key={idx} {...props} />)}
            </Container.Flex>
        </Card>
    )
}

export default ProfileMenu