import { useDispatch, useSelector } from "react-redux";
import { CheckAuth, getUserData, Login, Logout, toggleLogin } from "../store/userSlice";

export const useAuth = () => {

    const dispatch = useDispatch();

    const login = () => dispatch(Login.request());
    const logout = () => dispatch(Logout.request());
    const showLoginForm = () => dispatch(toggleLogin(true));
    const hideLoginForm = () => dispatch(toggleLogin(false));

    const userData = useSelector(getUserData);

    const checkAuth = () => dispatch(CheckAuth.request());

    return ({
        isAuth: userData.user?.isAuthorised,
        showLogin: userData.login.show,
        login,
        logout,
        checkAuth,
        showLoginForm,
        hideLoginForm
    })
};
