import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../../assets/logo";
import { useMenu } from "../../hooks/useMenu";
import styled from "styled-components";
import { Fragment } from "react";

interface ButtonProps {
    onClick: () => void;
}

const Burger = ({ onClick }: ButtonProps) => {
    return (
        <svg
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
                fill="#7A7A7A"
            />
        </svg>
    );
};

const ButtonContainer = styled.div`
    position: absolute;
    left: 32px;
    top: 22px;
    z-index: 4;
`;

const Header = () => {
    const { menuIsShown, showMenu } = useMenu();

    return (
        <Container.Flex
            fullWidth
            styles={{
                paddingTop: "11px",
                height: "50px"
            }}
        >
            {!menuIsShown && (
                <Fragment>
                    <ButtonContainer>
                        <Burger onClick={showMenu} />
                    </ButtonContainer>
                    <Link to={"/"}>
                        <Logo />
                    </Link>
                </Fragment>
            )}
        </Container.Flex>
    );
};

export default Header;
