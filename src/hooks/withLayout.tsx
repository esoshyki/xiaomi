import { ComponentType, Fragment, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bearer from "../components/Layout/Bearer";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import PageLoading from "../components/Layout/PageLoading";
import { CheckAuth, getUserData, resetCheckout } from "../store/userSlice";

export const withLayout =
    <T extends object>(
        Component: ComponentType<T>,
        pageTitle: string,
        needAuth?: true
    ) =>
    (props: T): ReactElement => {
        const user = useSelector(getUserData);
        const dispatch = useDispatch();

        useEffect(() => {
            if (typeof document !== "undefined") {
                document.title = pageTitle;
            }
            dispatch(resetCheckout())
        }, [dispatch]);

        useEffect(() => {
            if (user.user && !user.checkAuth.result && !user.checkAuth.pending) {
                dispatch(CheckAuth.request())
            }
            if (!user.user) {
                dispatch(resetCheckout())
            }
        }, [user.user, dispatch, user.checkAuth.pending, user.checkAuth.result])

        return (
            <Fragment>
                <Header />
                <Main>
                    {!needAuth && <Component {...props} />}
                    {needAuth &&
                        !user.checkAuth.pending &&
                        user.checkAuth.result === "success" && (
                            <Component {...props} />
                        )}
                    {needAuth && user.checkAuth.pending && <PageLoading />}
                    {needAuth && user.checkAuth.result === "error" && (
                        <Bearer />
                    )}
                    {needAuth && !user.checkAuth.result && <Bearer />} 
                </Main>
            </Fragment>
        );
    };
