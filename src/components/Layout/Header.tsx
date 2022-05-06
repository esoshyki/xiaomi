import Container from "../ui/Container";
import { useMenu } from "../../hooks/useMenu";
import styled from "styled-components";
import React, { Fragment } from "react";
import Menu from "./Menu";
import Logo from "../../assets/logo";
import { Link } from 'react-router-dom'
import Icon from "../ui/Icon";
interface ButtonProps {
    onClick: () => void;
}

const BurgerWrapper = styled.svg`
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.colors.icon.default};
    transition: color 200ms ease-in;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.icon.secondary};
    }
`;
const LogoWrapper = styled.span`
    flex-shrink: 0;
    font-size: 0;
`;

const Burger = ({ onClick }: ButtonProps) => {
    return (
        <BurgerWrapper
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
                d="M1 5C1 4.44772 1.44772 4 2 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H2C1.44772 6 1 5.55228 1 5ZM1 10C1 9.44772 1.44772 9 2 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H2C1.44772 11 1 10.5523 1 10ZM2 14C1.44772 14 1 14.4477 1 15C1 15.5523 1.44772 16 2 16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H2Z"
                fill="currentColor"
            />
        </BurgerWrapper>
    );
};

const ButtonContainer = styled.button`
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
`;


const BidLink = styled.a<{ active: boolean }>`
    position: relative;
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.colors.icon.secondary};
    text-align: center;
    
    svg {
        fill: currentColor;
    }
    
    &:after {
        position: absolute;
        right: 0;
        top: 0;
		display: ${props => props.active ? "block" : "none"};
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.info.error};
        content: '';
    }
`;

const Header = () => {
    const { showMenu, menuIsShown } = useMenu();

    return (
        <header className="container">
            <Container.Flex
                fullWidth
                justify="between"
                direction="row"
                styles={{
                    padding: "35px 32px"
                }}
                breakpoints={{
                    659.9: {
                        padding: "11px 8px"
                    },
                }}
            >
                {!menuIsShown &&
                    <ButtonContainer type="button">
                        <Burger onClick={showMenu} />
                    </ButtonContainer>
                }
                <Menu />
                <LogoWrapper>
                    <Link to={"/"}>
                        <Logo isWhite={menuIsShown} />
                    </Link>
                </LogoWrapper>

                <BidLink href="/" active={true}>
                    <Icon name="bell" />
                </BidLink>
            </Container.Flex>
        </header>
    );
};

export default Header;
