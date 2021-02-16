import React from 'react';

import Routes from './routes';

import AppThemeProvider from './hooks/Theme';

function App() {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}

export default App;
