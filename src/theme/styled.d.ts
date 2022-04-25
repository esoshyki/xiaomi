import { Typography } from './typography';
import { Colors } from './colors';
import 'styled-components';
import type { ButtonTheme, ThemeInput, CardProps, TextProps } from "./types";

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    id: number
    colors: Colors
    typography: Typography
    spaces: {
        0: string
        1: string
    }
  }
}