import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {
    getUserData,
    Login as LoginRoutine,
    toggleLogin,
} from "../../store/userSlice";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Typography from "../ui/Typography";

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

    const theme = useTheme();

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
            <Container.Flex
                justify="center"
                fullHeight
                onClick={onClick}
                className="login-wrapper"
                styles={{ background: theme.colors.background.default }}
            >
                <Card
                    noShadow
                    padding={20}
                    styles={{
                        width: "auto",
                        margin: "auto",
                        backgroundColor: "#fff",
                    }}
                >
                    <Container.Flex
                        verticalGap={10}
                        styles={{
                            width: "300px",
                            margin: "auto",
                            height: "100%",
                        }}
                        justify="center"
                    >
                        <Typography.Small>Логин</Typography.Small>
                        <Input
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            fullWidth
                        />
                        <Typography.Small>Пароль</Typography.Small>
                        <Input
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
