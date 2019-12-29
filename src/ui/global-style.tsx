import { createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

export default createGlobalStyle`
  div#root, html, body {
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: ${theme.layout.backgroundColor};
  }
  div#root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
