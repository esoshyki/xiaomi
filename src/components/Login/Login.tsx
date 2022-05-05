import { useEffect, useState } from "react";
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
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginValue, setLoginValue] = useState("");
    const [password, setPassword] = useState("");

    const { user, isAuth } = useAuth();

    const theme = useTheme();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {

            navigate("/")
        }
    }, [isAuth])


    const onSubmit = () => {
        const formData = new FormData();

        formData.set("login", loginValue);
        formData.set("password", password);
        dispatch(LoginRoutine.request(formData));
    };


    return (
        <Card
            noShadow
            padding={28}
            styles={{
                width: "auto",
                margin: "auto",
            }}
        >
            <Container.Flex
                verticalGap={16}
                fullWidth
                fullHeight
                justify="center"
            >
                <Typography.Small>Логин</Typography.Small>
                <Input
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                    fullWidth
                />
                <Typography.Small>Пароль</Typography.Small>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    secure
                />

                <Typography.Link textAlign="end" fullWidth href="/restore-password">Вспомнить пароль?</Typography.Link>
                <Button
                    withLoader
                    pending={user.login.pending}
                    onClick={onSubmit}
                    square
                >
                    Отправить
                </Button>

                {!!user?.login?.errors?.length && <Typography.Error>
                        {user.login.errors.map(el => el.message).join(". ")}
                    </Typography.Error>}
            </Container.Flex>
        </Card>
    );
};

export default Login;
