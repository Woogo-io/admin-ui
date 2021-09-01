import React, { FC, PropsWithChildren } from 'react';

import {
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '../../theme/icons';

import { useSidebar, useTheme } from '../providers';

interface HeaderProps {
  title: string;
  SearchComponent?: () => JSX.Element;
}

const Header: FC<HeaderProps> = (props: PropsWithChildren<HeaderProps>) => {
  const {
    title, SearchComponent, children,
  } = props;
  const { isSidebarOpen, setIsSidebarOpen, buttonRef } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  const handleThemeClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky z-10 top-0 bg-white shadow-bottom dark:bg-gray-800 max-h-16 flex items-center h-16 border-b border-purple-600">
      <div className="flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300 w-full">
        <div className="flex items-center">
          <button
            className="p-1 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Menu"
            type="button"
            ref={buttonRef}
          >
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>

          <div
            className="text-lg font-bold text-gray-800 dark:text-gray-200 ml-2"
          >
            {title}
          </div>
        </div>

        {SearchComponent && (
          <div className="hidden lg:flex justify-center flex-1 lg:mr-32">
            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <SearchIcon className="w-4 h-4" aria-hidden="true" />
              </div>
              {SearchComponent}
            </div>
          </div>
        )}
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleThemeClick}
              aria-label="Toggle color mode"
              type="button"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {children}
        </ul>
      </div>
    </header>
  );
};

export default Header;
