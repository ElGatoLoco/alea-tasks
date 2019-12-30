import { RouteComponentProps, Router } from '@reach/router';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import fonts from './config/fonts';
import theme from './config/theme';
import Navbar from './features/navigation/Navbar';
import routes from './features/navigation/routes';
import DragAndDrop from './pages/DragAndDrop';
import Modal from './pages/Modal';
import GlobalStyle from './ui/global-style';

const Route: React.FC<{ component: React.FC } & RouteComponentProps> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const App = () => {
  useEffect(() => {
    fonts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar path={routes.dragAndDrop}>
          <Route component={DragAndDrop} path={routes.dragAndDrop} />
          <Route component={Modal} path={routes.modal} />
        </Navbar>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
