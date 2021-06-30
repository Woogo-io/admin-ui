import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Icon, IconType } from '../../theme/icons';

interface ReactLinkMenuProps {
  icon: IconType;
  name: string;
  to: string;
}

const ReactLinkMenu = ({ to, icon, name }: ReactLinkMenuProps) => (
  <li className="relative px-6 py-3">
    <NavLink
      exact
      to={to}
      className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
      activeClassName="text-gray-800 dark:text-gray-100"
    >
      <Route exact path={to}>
        <span
          className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        />
      </Route>
      <Icon className="w-5 h-5" ariaHidden="true" icon={icon} />
      <span className="ml-4">{name}</span>
    </NavLink>
  </li>
);

export default ReactLinkMenu;
