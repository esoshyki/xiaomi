import { ComponentType, Fragment, ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import { CheckAuth, getUserData } from "../store/userSlice";

export const withLayout =
    <T extends object>(
        Component: ComponentType<T>,
        pageTitle: string,
        needAuth?: true
    ) =>
    (props: T): ReactElement => {
        const dispatch = useDispatch();

        const [cookies] = useCookies();

        const { checkAuth } = useSelector(getUserData);

        useEffect(() => {
            if (typeof document !== "undefined") {
                document.title = pageTitle;
            }
        }, []);

        useEffect(() => {
            if (needAuth) {
                dispatch(
                    CheckAuth.request({
                        sessid: cookies.sessid,
                        sessName: cookies.sessName,
                    })
                );
            }
        }, [needAuth]);

        return (
            <Fragment>
                <Header />
                <Main>
                    {!needAuth ||
                        (!checkAuth.pending &&
                            checkAuth.result === "success" && (
                                <Component {...props} />
                            ))}
                    {needAuth && checkAuth.pending && <div>Загрузка</div>}
                    {needAuth && checkAuth.result === "error" && (
                        <div>Чтобы посмотреть контент войдите</div>
                    )}
                </Main>
            </Fragment>
        );
    };
