import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';
import { GlobalStyle } from 'assets/styles/styled-components/global.styles';
import Site from 'app/shared/layouts/Site';
import store from 'app/store';
import AppRoutes from './App.routes';

const App: React.FC = () => (
  <ReactReduxProvider store={store}>
    <GlobalStyle />
    <Site>
      <AppRoutes />
    </Site>
  </ReactReduxProvider>
);

export default App;
