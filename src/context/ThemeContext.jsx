'use client';
import { useEffect, createContext, useState } from 'react';

export const ThemeContext = createContext();

const getFromLocaleStorage = () => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme');
    return theme || 'light';
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getFromLocaleStorage());

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
