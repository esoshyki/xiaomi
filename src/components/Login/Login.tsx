import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {
    getUserData,
    Login as LoginRoutine,
    toggleLogin,
} from "../../store/userSlice";
import Container from "../ui/Container";
import Card from "../ui/Card";

const LoginWrapper = styled.div`
    position: fixed;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`;

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const user = useSelector(getUserData);

    const onSubmit = () => {
        const formData = new FormData();

        formData.set("login", login);
        formData.set("password", password);
        dispatch(LoginRoutine.request(formData));
    };

    const onClick = (e: any) => {
        if (e.target.classList.contains("login-wrapper")) {
            dispatch(toggleLogin(false));
        }
    };

    return (
        <LoginWrapper>
            <Container.Flex justify="center" fullHeight onClick={onClick} className="login-wrapper">
            <Card noShadow styles={{
                width: "auto",
                margin: "auto",
                backgroundColor: "#fff",
            }}>
                <Container.Flex
                    styles={{ width: "300px", margin: "auto", height: "100%" }}
                    justify="center"
                >
                    <Input
                        label="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        fullWidth
                    />
                    <Input
                        label="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    <Button
                        withLoader
                        pending={user.login.pending}
                        onClick={onSubmit}
                        square
                    >
                        Отправить
                    </Button>
                </Container.Flex>
            </Card>
            </Container.Flex>
        </LoginWrapper>
    );
};

export default Login;
