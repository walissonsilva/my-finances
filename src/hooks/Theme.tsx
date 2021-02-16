import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface IThemeProps {
  isDark: boolean,
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<IThemeProps>({} as IThemeProps);

const AppThemeProvider: React.FC = ({ children }) => {
  const theme = localStorage.getItem('@my-finances:theme');

  const [isDark, setIsDark] = useState(theme === 'dark' ? true : false);

  useEffect(() => {
    localStorage.setItem(
      '@my-finances:theme', isDark ? 'dark' : 'light'
    );
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{
      isDark,
      setIsDark,
    }}>
      { children }
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must be used within a ThemeProvider');
  }

  const {
    isDark,
    setIsDark
  } = context;

  return {
    isDark,
    setIsDark
  }
}

export default AppThemeProvider;