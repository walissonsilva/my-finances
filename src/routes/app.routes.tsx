import React from 'react';

import Dashboard from '../pages/Dashboard';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

import { useTheme } from '../hooks/Theme';

const Routes: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  )
}

export default Routes;