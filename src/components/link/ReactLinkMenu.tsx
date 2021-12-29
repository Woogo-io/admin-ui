import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import clsx from 'clsx';
import { Icon, IconType } from '../../theme/icons';
import theme from '../../theme/default';

interface ReactLinkMenuProps {
  icon: IconType;
  name: string;
  to: string;
}

const ReactLinkMenu = ({ to, icon, name }: ReactLinkMenuProps) => {
  const isCurrentLink = useMatch(to);
  return (
    <li className={theme.linkMenu.default}>
      <NavLink
        to={to}
        className={({ isActive }) => clsx(theme.linkMenu.link, isActive && theme.linkMenu.active)}
      >
        {isCurrentLink && (
          <span
            className={theme.linkMenu.bar}
            aria-hidden="true"
          />
        )}

        <Icon className={theme.linkMenu.icon} ariaHidden="true" icon={icon} />
        <span className={theme.linkMenu.text}>{name}</span>
      </NavLink>
    </li>
  );
};
export default ReactLinkMenu;
