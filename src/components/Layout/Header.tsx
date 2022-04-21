import { Link } from "react-router-dom";
import styled from "styled-components";
import User from "./User";

const HeaderWrapper = styled.header`
    position: relative;
    width: 100%;
    height: 60px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
`;

const Header = () => {


    return (
        <HeaderWrapper>
            <Link
                to={"/"}
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    margin: "0 20px",
                }}
            >
                Главная
            </Link>

            <Link
                to={"/theme"}
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    margin: "0 20px",
                }}
            >
                Тема
            </Link>

            <Link
                to={"/profile"}
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    margin: "0 20px",
                }}
            >
                Профиль
            </Link>

            <User />

        </HeaderWrapper>
    );
};

export default Header;
