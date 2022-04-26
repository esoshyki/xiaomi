import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { useAuth } from "../../hooks/useAuth";
import { useMenu } from "../../hooks/useMenu";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Typography from "../ui/Typography";
import Login from "../Login";

const MenuWrapper = styled.div<{ visible: boolean }>`
    width: ${props => props.visible ? "100vh" : "0"};
    height: ${props => props.visible ? "100vh" : "0"};
    border-radius: ${props => props.visible ? 0 : "50%"};
    opacity: ${props => props.visible ? 1 : 0};
    position: absolute;
    z-index: 2;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    left: ${(props) => (props.visible ? "0" : "-200vw")};
    top: ${props => props.visible ? "0" : "-200vw"};
    transition: top 200ms ease-in, left 200ms ease-in, opacity 200ms ease-in, width 200ms ease-in, height 200ms ease-in, border-radius 100ms ease-in;
    z-index: 3;
    padding-top: 10px;
    @media screen and (max-width: 600px) {
        left: ${(props) => (props.visible ? "0" : "-100%")};    

    }
`;

const Close = styled.svg`
    position: absolute;
    top: 22px;
    left: 32px;
    transition: color 200ms ease-in;
    color: ${(props) => props.theme.colors.icon.contrast};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.icon.secondary};
    }
`;

const CloseButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Close
            onClick={onClick}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.63603 14.9499C3.24551 15.3404 3.24551 15.9736 3.63603 16.3641C4.02656 16.7546 4.65972 16.7546 5.05025 16.3641L9.99988 11.4144L14.9497 16.3643C15.3403 16.7548 15.9734 16.7548 16.364 16.3643C16.7545 15.9738 16.7545 15.3406 16.364 14.9501L11.4141 10.0002L16.364 5.05037C16.7545 4.65984 16.7545 4.02668 16.364 3.63615C15.9734 3.24563 15.3403 3.24563 14.9497 3.63615L9.99988 8.58602L5.05025 3.63639C4.65972 3.24586 4.02656 3.24586 3.63603 3.63639C3.24551 4.02691 3.24551 4.66008 3.63603 5.0506L8.58566 10.0002L3.63603 14.9499Z"
                fill="currentColor"
            />
        </Close>
    );
};

const MenuLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 20px 0;
    color: #ffffff;
    transition: color 200ms ease-in;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.button.hover};
        span {
            color: ${(props) => props.theme.colors.button.hover};
        }
    }
`;

const Text = ({ children }: { children: ReactNode }) => {
    return (
        <Typography.Button
            styles={{
                color: "#fff",
                marginLeft: "20px",
                transition: "color 200ms ease-in",
            }}
        >
            {children}
        </Typography.Button>
    );
};

const Menu = () => {
    const { hideMenu, menuIsShown } = useMenu();

    const { showLogin, showLoginForm, isAuth } = useAuth();

    const onLoginClick = () => {
        console.log(isAuth);
        if (!isAuth) {
            showLoginForm()
        }
    }

    return (
        <MenuWrapper visible={menuIsShown}>
            <CloseButton onClick={hideMenu} />

            {showLogin && <Login />}

            <Container.Flex styles={{ width: "124px", marginTop: "60px", marginLeft: "calc((100vw - 124px) / 2)" }}>
                <MenuLink onClick={onLoginClick}>
                    <Icon name="user" />
                    <Text>{isAuth ? "Профиль" : "Войти"}</Text>
                </MenuLink>

                <MenuLink>
                    <Icon name="reports" />
                    <Text>Отчеты</Text>
                </MenuLink>

                <MenuLink>
                    <Icon name="help" />
                    <Text>Помощь</Text>
                </MenuLink>
            </Container.Flex>
        </MenuWrapper>
    );
};

export default Menu;
