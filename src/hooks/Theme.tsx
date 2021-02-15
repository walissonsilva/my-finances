import React, { createContext, useContext, useState } from 'react';

interface IThemeProps {
  isDark: boolean,
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<IThemeProps>({} as IThemeProps);

const AppThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

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