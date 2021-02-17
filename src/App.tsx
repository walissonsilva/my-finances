import React from 'react';

import Routes from './routes';

import AppThemeProvider from './hooks/Theme';
import SelectMonthYearProvider from './hooks/SelectMonthYear';

function App() {
  return (
    <AppThemeProvider>
      <SelectMonthYearProvider>
        <Routes />
      </SelectMonthYearProvider>
    </AppThemeProvider>
  );
}

export default App;
