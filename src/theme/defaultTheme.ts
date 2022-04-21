import { DefaultTheme } from "styled-components";

enum Colors {
    primary = "#1769aa",
    primaryHover = "#2196f3",
    primaryActive = "#4dabf5",
    secondary = "#2e7d32",
    secondaryHover = "#66bb6a",
    secondaryActive = "#a5d6a7",
    background = "#F5F5F5",
    white = "#fff",
    transparent = "transparent",
    dark = "#000",
    error = "#DB2845",
    errorActive = "#C20824",
    errorHover = "#F44C6A",
    grey = "#f2f2f2"
}

const defaultTheme : DefaultTheme = {
    id: 1,
    borderRadius: "5px",

    colors: {
        main: "#000",
        secondary: "megenta",
        text: {
            main: "#000"
        },
        bgMain: Colors.background,
        primary: Colors.primary,
        primaryHover: Colors.primaryHover,
        primaryActive: Colors.primaryActive,
        error: Colors.error,
        errorActive: Colors.errorActive,
        errorHover: Colors.errorHover
    },

    input: {
        common: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primary,
            labelBackground: Colors.background,
            labelColor: Colors.dark

        },
        hover: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primaryHover,
            labelBackground: Colors.background,
            labelColor: Colors.dark
        },
        active: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primaryActive,
            labelBackground: Colors.background,
            labelColor: Colors.dark
        },
        focus: {
            bgColor: Colors.white,
            color: Colors.dark,
            borderColor: Colors.primaryActive,
            labelBackground: Colors.background,
            labelColor: Colors.dark
        }
    },

    card: {
        bgColor: Colors.white,
        color: Colors.dark,
        borderRadius: 10,
        boxShadow: "0 0 5px 5px " + Colors.grey
    },

    buttons: {
        primary: {
            bgcolor: Colors.primary,
            textColor: Colors.white,
            borderColor: Colors.transparent,
            hoverBackground: Colors.primaryHover,
            activeBackground: Colors.primaryActive
        },
        secondary: {
            bgcolor: Colors.secondary,
            textColor: Colors.white,
            borderColor: Colors.transparent,
            hoverBackground: Colors.secondaryHover,
            activeBackground: Colors.secondaryActive
        },
        outline: {
            bgcolor: Colors.transparent,
            textColor: Colors.dark,
            borderColor: Colors.dark,
            hoverBackground: Colors.transparent,
            activeBackground: Colors.transparent
        }
    },

    spaces: {
        0: "0",
        1: "1rem"
    }
}

export { defaultTheme }