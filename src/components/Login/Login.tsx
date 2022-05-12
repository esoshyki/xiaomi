import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {
    Login as LoginRoutine,
} from "../../store/userSlice";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Typography from "../ui/Typography";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginValue, setLoginValue] = useState("");
    const [password, setPassword] = useState("");

    const { userData, isAuth } = useAuth();

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
               {/* <Typography.Small>Логин</Typography.Small>*/}
                <Input
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                    fullWidth
                    placeholder="Логин или email"
                />
               {/* <Typography.Small>Пароль</Typography.Small>*/}
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    secure={true}
                    placeholder="Пароль"
                />

                <Typography.Link textAlign="end" fullWidth href="/restore-password" styles={{fontSize: "14px", lineHeight: "16px", fontWeight: "4"}}>Вспомнить пароль?</Typography.Link>
                <Button
                    withLoader
                    pending={userData.login.pending}
                    onClick={onSubmit}
                    square
                    fullWidth
                    sumbit
                >
                    Войти
                </Button>

                {!!userData?.login?.errors?.length && <Typography.Error>
                        {userData.login.errors.map(el => el.message).join(". ")}
                    </Typography.Error>}
            </Container.Flex>
        </Card>
    );
};

export default Login;
