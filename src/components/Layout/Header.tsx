import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getUserData, toggleLogin } from "../../store/userSlice";
import Login from "../Login";
import Button from "../ui/Button";

const HeaderWrapper = styled.header`
    position: relative;
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
`;

const Header = () => {
    const dispatch = useDispatch();

    const showLogin = () => {
        dispatch(toggleLogin(true));
    };

    const { login } = useSelector(getUserData);

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

            <Button
                square
                styles={{
                    position: "absolute",
                    right: "20px",
                    top: "8px",
                    margin: 0,
                    padding: "10px"
                }}
                onClick={showLogin}
                variant="secondary"
            >
                Войти
            </Button>

            {login.show && <Login />}
        </HeaderWrapper>
    );
};

export default Header;
