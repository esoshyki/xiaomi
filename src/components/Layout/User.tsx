import styled from "styled-components";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { getUserData, Logout, toggleLogin } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";
import Icon from "../ui/Icon";
import Typography from "../ui/Typography";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
`;

const User = () => {
    const dispatch = useDispatch();

    const showLogin = () => {
        dispatch(toggleLogin(true));
    };

    const { login, user } = useSelector(getUserData);

    const logout = () => {dispatch(Logout.request())};

    return (
        <Wrapper>
            <Container.Flex
                justify="center"
                fullHeight
                fullWidth
                direction="row"
            >
                {!user && (
                    <Button
                        square
                        styles={{
                            position: "absolute",
                            right: "20px",
                            top: "8px",
                            margin: 0,
                            padding: "10px",
                        }}
                        onClick={showLogin}
                        variant="secondary"
                    >
                        Войти
                    </Button>
                )}

                {!!user && (
                    <Container.Flex direction="row" fullHeight>
                        <Icon
                            name="user"
                            styles={{
                                color: "#fff",
                                height: "16px",
                                width: "12px",
                                marginRight: "20px",
                            }}
                        />
                        <Typography.H5>
                            {user.userName ?? "Пользователь"}
                        </Typography.H5>

                        <Button
                            variant="secondary"
                            onClick={logout}
                            square
                            styles={{ height: "40px", padding: "0 20px" }}
                        >
                            Выйти
                        </Button>
                    </Container.Flex>
                )}
            </Container.Flex>
            {login.show && <Login />}
        </Wrapper>
    );
};

export default User;
