import { ComponentType, ReactElement } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getThemeData } from "../store/themeSlice";

export const withTheme =
    <T extends object>(Component: ComponentType<T>) =>
    (props: T): ReactElement => {

        const { theme } = useSelector(getThemeData);

        return (
            <ThemeProvider theme={theme}>
                <Component {...props} />
            </ThemeProvider>
        );
    };
