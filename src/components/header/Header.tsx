import React, { FC } from 'react';

import {
  BellIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '../../theme/icons';

import { Input } from '../forms';
import { useSidebar, useTheme } from '../providers';

const Header: FC = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  const handleThemeClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="relative z-20 bg-white shadow-bottom dark:bg-gray-800 max-h-16 flex items-center h-16">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Menu"
          type="button"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search"
              ariaLabel="Search"
            />
          </div>
        </div>
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
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={() => console.log('Notification Click')}
              aria-label="Notifications"
              aria-haspopup="true"
              type="button"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              />
            </button>
          </li>
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={() => console.log('Account Click')}
              aria-label="Account"
              aria-haspopup="true"
              type="button"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
