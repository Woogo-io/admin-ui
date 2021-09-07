import React, { FC, PropsWithChildren } from 'react';
import theme from '../../theme/default';

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
  const { theme: themeColor, toggleTheme } = useTheme();

  const handleThemeClick = () => {
    toggleTheme(themeColor === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={theme.header.default}>
      <div className={theme.header.container}>
        <div className={theme.header.left}>
          <button
            className={theme.header.menuButton}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Menu"
            type="button"
            ref={buttonRef}
          >
            <MenuIcon className={theme.header.menuIcon} aria-hidden="true" />
          </button>

          <div className={theme.header.title}>
            {title}
          </div>
        </div>

        {SearchComponent && (
          <div className={theme.header.search.container}>
            <div className={theme.header.search.wrapper}>
              <div className={theme.header.search.iconContainer}>
                <SearchIcon className={theme.header.search.icon} aria-hidden="true" />
              </div>
              {SearchComponent}
            </div>
          </div>
        )}
        <ul className={theme.header.right.container}>
          <li className={theme.header.themeSelector.default}>
            <button
              className={theme.header.themeSelector.button}
              onClick={handleThemeClick}
              aria-label="Toggle color mode"
              type="button"
            >
              {themeColor === 'dark' ? (
                <SunIcon className={theme.header.themeSelector.icon} aria-hidden="true" />
              ) : (
                <MoonIcon className={theme.header.themeSelector.icon} aria-hidden="true" />
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
