import 'styled-components';
import type { ButtonTheme, ThemeInput, CardProps } from "./types";

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    id: number
    borderRadius: string;

    colors: {
      text: {
        main: string
      }
      main: string
      secondary: string
      bgMain: string
      primary: string
      primaryHover: string
      primaryActive: string,
      error: string,
      errorActive: string
      errorHover: string
    }

    input: ThemeInput

    buttons: ButtonTheme

    card: CardProps

    spaces: {
        0: string
        1: string
    }
  }
}