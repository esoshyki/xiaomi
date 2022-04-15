import { DefaultTheme } from "styled-components";

enum Colors {
    primary = "#1769aa",
    primaryHover = "#2196f3",
    primaryActive = "#4dabf5",
    secondary = "#2e7d32",
    secondaryHover = "#66bb6a",
    secondaryActive = "#a5d6a7",
    background = "#2f2f2f",
    white = "#fff",
    transparent = "transparent",
    dark = "#000"
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
        primaryActive: Colors.primaryActive
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