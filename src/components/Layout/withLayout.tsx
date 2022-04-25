import { ComponentType, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bearer from "./Bearer";
import Header from "./Header";
import Main from "./Main";
import PageLoading from "./PageLoading";
import { CheckAuth, getUserData, resetCheckout } from "../../store/userSlice";
import Container from "../ui/Container";
import Background from "./Backgorund";
import Menu from "./Menu";

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
            dispatch(resetCheckout());
        }, [dispatch]);

        useEffect(() => {
            if (
                user.user &&
                !user.checkAuth.result &&
                !user.checkAuth.pending
            ) {
                dispatch(CheckAuth.request());
            }
            if (!user.user) {
                dispatch(resetCheckout());
            }
        }, [
            user.user,
            dispatch,
            user.checkAuth.pending,
            user.checkAuth.result,
        ]);

        return (
            <Container.Flex styles={{ position: "relative" }}>
                <Background />
                <Menu />
                <Container.Flex fullHeight fullWidth styles={{ zIndex: "1"}}>
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
                </Container.Flex>
            </Container.Flex>
        );
    };
