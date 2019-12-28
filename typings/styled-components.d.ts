import theme from '../src/config/theme';

type ThemeT = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeT {}
}
