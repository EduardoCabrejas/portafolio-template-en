"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadTheme, toggleTheme } from '@/components/Buttons/utils/utils';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = loadTheme();
    setThemeState(savedTheme);
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};