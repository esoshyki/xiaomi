import styled from "styled-components/macro";
import LogoWhite from "../../assets/logoWhite";
import { useMenu } from "../../hooks/useMenu";
import Container from "../ui/Container";

const MenuWrapper = styled.div<{visible: boolean}>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.7);
    left: ${(props) => (props.visible ? "0" : "-100%")};
    transition: left 300ms ease-in;
    z-index: 3;
    top: 0;
    padding-top: 10px;
`;

const Close = styled.svg`
    position: absolute;
    top: 22px;
    left: 32px;
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
                fill="white"
            />
        </Close>
    );
};

const Menu = () => {
    const { hideMenu, menuIsShown } = useMenu();

    return (
        <MenuWrapper visible={menuIsShown}>
                        <CloseButton onClick={hideMenu} />
            <Container.Flex>
                <LogoWhite />
            </Container.Flex>

        </MenuWrapper>);
};

export default Menu;
