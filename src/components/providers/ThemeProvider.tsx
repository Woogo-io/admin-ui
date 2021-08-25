import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import ThemeContext from '../contexts/ThemeContext';

interface ThemeProviderProps {
  defineBodyColor?: boolean;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  defineBodyColor,
}: PropsWithChildren<ThemeProviderProps>) => {
  let userPreference: string | boolean = 'dark';
  if (typeof window !== 'undefined') {
    userPreference = !!window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  let prefLocalStorage : string | boolean = 'dark';

  if (typeof localStorage !== 'undefined') {
    prefLocalStorage = localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as string)
      : false;
  }
  const currentPreference = prefLocalStorage || (userPreference ? 'dark' : 'light');
  const [theme, setTheme] = useState(currentPreference);
  const [modalOpen, setModalOpen] = useState(false);

  const oldTheme = theme === 'light' ? 'dark' : 'light';

  // Prevent NextJS SSR
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    document.documentElement.classList.remove(`${oldTheme}`);
    document.documentElement.classList.add(`${theme}`);
    localStorage.setItem('theme', `${theme}`);
  }, [theme, oldTheme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  useEffect(() => {
    if (defineBodyColor) document.body.classList.add('bg-gray-50', 'dark:bg-gray-900');
  }, []);

  useEffect(() => {
    if (modalOpen) {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = () => { window.scrollTo(x, y); };
    } else window.onscroll = () => {};
  }, [modalOpen]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setModalOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
