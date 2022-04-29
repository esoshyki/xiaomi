import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { useAuth } from "../../hooks/useAuth";
import { useMenu, animateTime } from "../../hooks/useMenu";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Typography from "../ui/Typography";
import Login from "../Login";
import {breakpoints} from "../types";
import { Fragment } from "react";

const MenuWrapper = styled.div<{ visible: boolean, animationOpen: boolean, animationClose: boolean }>`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: ${props => props.visible ? "block" : "none"};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /*overflow: hidden;*/
    padding: 11px 32px 20px;
    z-index: 3;
    &:before {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: ${props => (props.animationOpen) ? "30vw" : "300vw"};
        height: ${props => (props.animationOpen) ? "30vw" : "300vh"};
		background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
		backdrop-filter: blur(8px);
        transform: translate3d(-50%, -50%, 0);
        content: "";
        will-change: width, height;
		animation: ${props => (props.animationOpen) ? `menuAppearance ${animateTime}ms forwards`: (props.animationClose) ? `menuAppearance ${animateTime}ms reverse` : "none"};
       
    }
    
    @media (min-width: ${breakpoints.sm}) {
		
    }
`;

const Close = styled.svg`
	z-index: 5;
	position: relative;
    margin-right: auto;
    transition: ${(props) => `color ${animateTime}ms`};
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
    margin-top: 37px;
    color: #ffffff;
    transition: color 200ms;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.button.hover};
    }
	&:active, &:focus {
		color: ${(props) => props.theme.colors.link.pressed};
	}
    
    svg {
		transition: color 200ms;
    }
`;

const Text = ({ children }: { children: ReactNode }) => {
    return (
        <Typography.Button
            styles={{
                color: "currentcolor",
                marginLeft: "21px",
                transition: `color 200ms`,
            }}
        >
            {children}
        </Typography.Button>
    );
};

const NavWrapper = styled.nav<{ visible: boolean }>`
	width: 124px;
	margin: 88px auto 0;
	opacity: ${props => (props.visible) ?  1: 0};
	transition: ${props => (props.visible) ? `opacity ${animateTime / 2}ms`: `opacity ${animateTime}ms`};
`;

const Menu = () => {
    const { hideMenu, menuIsShown, animationOpen, animationClose } = useMenu();
    const { showLogin, showLoginForm, isAuth } = useAuth();

    const onLoginClick = () => {
        if (!isAuth) {
            showLoginForm();
        }
    };

    return (
        <Fragment>
            {menuIsShown && <CloseButton onClick={hideMenu} />}
            <MenuWrapper className="container" visible={menuIsShown} animationOpen={animationOpen} animationClose={animationClose}>
                {showLogin && <Login />}

                <NavWrapper visible={menuIsShown}>
                    <Container.Flex>
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
                </NavWrapper>
            </MenuWrapper>
        </Fragment>
    );
};

export default Menu;
