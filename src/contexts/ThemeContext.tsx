import { useState, useEffect, ReactNode } from "react";
import { THEME } from "../constants/themes";
import { ThemeContext } from "./ThemeContext";

const THEME_STORAGE_KEY = "portfolio-theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<THEME>(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored as THEME) || THEME.DARK;
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
