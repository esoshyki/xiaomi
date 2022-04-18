import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    width: 100%;
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
        </HeaderWrapper>
    );
};

export default Header;
