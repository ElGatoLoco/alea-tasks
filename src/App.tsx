import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './ui/global-style';

import fonts from './config/fonts';
import theme from './config/theme';
import Box from './ui/Box';
import { H1 } from './ui/text';

const App = () => {
  useEffect(() => {
    fonts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <H1>Alea Tasks</H1>
      </Box>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
