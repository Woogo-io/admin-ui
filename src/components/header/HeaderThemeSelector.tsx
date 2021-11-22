import React from 'react';
import theme from '../../theme/default';

import {
  MoonIcon,
  SunIcon,
} from '../../theme/icons';

import { useTheme } from '../providers';

const HeaderThemeSelector = () => {
  const { theme: themeColor, toggleTheme } = useTheme();

  const handleThemeClick = () => {
    toggleTheme(themeColor === 'dark' ? 'light' : 'dark');
  };
  return (
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
  );
};

export default HeaderThemeSelector;
