import { typography } from './typography';
import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

const defaultTheme : DefaultTheme = {
    id: 1,
    colors: colors,
    typography: typography,
    spaces: {
        0: "0",
        1: "1rem"
    }
}

export { defaultTheme }