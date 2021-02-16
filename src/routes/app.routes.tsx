import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

import { useTheme } from '../hooks/Theme';

const Routes: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
        <GlobalStyles />
        <Switch>
          <Route path='/list/:type' component={List} />
          <Route path='/' component={Dashboard} exact/>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default Routes;