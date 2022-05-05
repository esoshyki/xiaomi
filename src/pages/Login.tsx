import { withLayout } from "../components/Layout/withLayout";
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <Login />
    )
};

export default withLayout(LoginPage, "Авторизация")