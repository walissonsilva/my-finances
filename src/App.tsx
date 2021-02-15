import React from 'react';

import Dashboard from './pages/Dashboard';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import darkTheme from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
