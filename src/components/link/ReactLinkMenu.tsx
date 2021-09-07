import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Icon, IconType } from '../../theme/icons';
import theme from '../../theme/default';

interface ReactLinkMenuProps {
  icon: IconType;
  name: string;
  to: string;
}

const ReactLinkMenu = ({ to, icon, name }: ReactLinkMenuProps) => (
  <li className={theme.linkMenu.default}>
    <NavLink
      exact
      to={to}
      className={theme.linkMenu.link}
      activeClassName={theme.linkMenu.active}
    >
      <Route exact path={to}>
        <span
          className={theme.linkMenu.bar}
          aria-hidden="true"
        />
      </Route>
      <Icon className={theme.linkMenu.icon} ariaHidden="true" icon={icon} />
      <span className={theme.linkMenu.text}>{name}</span>
    </NavLink>
  </li>
);

export default ReactLinkMenu;
