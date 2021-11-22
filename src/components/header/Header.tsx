import React, { FC, PropsWithChildren, ReactNode } from 'react';
import theme from '../../theme/default';

import {
  MenuIcon,
  SearchIcon,
} from '../../theme/icons';

import { useSidebar } from '../providers';

interface HeaderProps {
  title: ReactNode;
  SearchComponent?: () => JSX.Element;
}

const Header: FC<HeaderProps> = (props: PropsWithChildren<HeaderProps>) => {
  const {
    title, SearchComponent, children,
  } = props;
  const { isSidebarOpen, setIsSidebarOpen, buttonRef } = useSidebar();

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

          {children}
        </ul>
      </div>
    </header>
  );
};

export default Header;
