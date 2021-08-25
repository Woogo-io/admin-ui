/* eslint-disable no-console */
import React from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: (value: string) => void;
  setModalOpen: (value: boolean) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => console.warn('Please add <ThemeProvider /> in parent of your component'),
  setModalOpen: () => console.warn('Please add <ThemeProvider /> in parent of your component'),
});

export default ThemeContext;
