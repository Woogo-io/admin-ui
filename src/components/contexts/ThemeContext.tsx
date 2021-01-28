import React from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: (value: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: (value: string) => console.warn('no theme provider && ', value),
});

export default ThemeContext;
