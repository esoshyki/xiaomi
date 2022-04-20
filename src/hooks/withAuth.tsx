import { ComponentType, ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setUser } from "../store/userSlice";
import { User } from "../store/userSlice/types";

export const withAuth =
    <T extends object>(Component: ComponentType<T>) =>
    (props: T): ReactElement => {

        const dispatch = useDispatch()

        const [cookies, setCookie] = useCookies()

        const { user, checkAuth } = useSelector(getUserData);

        useEffect(() => {

            const getCookiesUser = () => {
                const { id, userName = "Неизвестный пользователь",  sessid, sessName, isAuthorised } = cookies;
                if (sessid) {
                    dispatch(setUser({
                        id, userName, sessid, sessName, isAuthorised
                    }))
                } else {
                    dispatch(setUser(null))
                }
            }

            const setCookiesUser = (user: User) => {
                Object.entries(user).forEach(([key, val]) => {
                    setCookie(key, val)
                })
            }

            if (checkAuth.result === "error") return;
            if (!user) {
                getCookiesUser()
            } else {
                setCookiesUser(user)
            }
        }, [user, cookies, dispatch, setCookie, checkAuth.result])

        return (
                <Component {...props} />
        );
    };
