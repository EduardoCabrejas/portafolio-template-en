"use client";
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@/context/themeContext';

const ThemeMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-dark-darkBlue2 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-light-greenBlue1 transition duration-300 hover:rotate-180"
    >
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}

export default ThemeMode;
