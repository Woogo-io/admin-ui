import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import { default as ThemeContext } from '../contexts/ThemeContext';

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren<{}>) => {
  
  let userPreference: string | boolean = 'dark';
  if(typeof window !== 'undefined') {
    userPreference =
    !!window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  let prefLocalStorage : string | boolean = 'dark';

  if(typeof localStorage !== 'undefined') {
    prefLocalStorage = localStorage.getItem('theme')
    ? (localStorage.getItem('theme') as string)
    : false;
  }
  const currentPreference =
    prefLocalStorage || (userPreference ? 'dark' : 'light');
  const [theme, setTheme] = useState(currentPreference);

  const oldTheme = theme === 'light' ? 'dark' : 'light';

  // Prevent NextJS SSR
  const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
  
  useIsomorphicLayoutEffect(() => {
    document.documentElement.classList.remove(`${oldTheme}`);
    document.documentElement.classList.add(`${theme}`);
    localStorage.setItem('theme', `${theme}`);
  }, [theme, oldTheme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
