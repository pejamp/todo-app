import { createContext, useState, ReactElement } from "react";

interface ThemeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

type ThemeType = {
  children: ReactElement;
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({ children }: ThemeType) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const theme = {
    isDarkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider }