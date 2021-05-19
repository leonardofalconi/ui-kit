import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

export const parameters = {
  layout: 'centered',
}

export const decorators = [
  Story => <ThemeProvider theme={theme}><Story/></ThemeProvider>
]