import { ComponentType, Fragment, ReactElement, useEffect } from "react";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";

export const withLayout =
    <T extends object>(Component: ComponentType<T>, pageTitle: string) =>
    (props: T): ReactElement => {

        useEffect(() => {
            if (typeof document !== undefined) {
                document.title = pageTitle
            }
        }, [pageTitle])

        return (
            <Fragment>
                <Header />
                <Main>
                    <Component {...props}/>
                </Main>
            </Fragment>
        );
    };
