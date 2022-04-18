import { addDecorator } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/theme/defaultTheme'


const themes = [defaultTheme]

addDecorator(story => <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}