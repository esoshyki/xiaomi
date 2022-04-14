import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string
      secondary: string
      bgMain: string
    }

    spaces: {
        0: string
        1: string
    }
  }
}