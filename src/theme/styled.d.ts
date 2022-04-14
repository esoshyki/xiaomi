import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
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
      primaryActive: string
    }

    spaces: {
        0: string
        1: string
    }
  }
}