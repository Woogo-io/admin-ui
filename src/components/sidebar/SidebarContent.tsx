import React, { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';

import * as Icons from '../../theme/icons/';
import { SidebarProps } from './Sidebar';

type IconProps = {
  icon: string;
  className: string;
  ariaHidden: string;
};

const Icon = (props: IconProps) => {
  const { icon, className, ariaHidden } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Iconz = Icons[icon];
  return <Iconz className={className} aria-hidden={ariaHidden} />;
};

const SidebarContent: FC<SidebarProps> = ({
  routes,
  website,
  url,
}: SidebarProps) => {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href={url}
      >
        {website}
      </a>
      <ul className="mt-6">
        {routes.map((route) => (
          <li className="relative px-6 py-3" key={route.name}>
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <Route path={route.path}>
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                />
              </Route>
              <Icon className="w-5 h-5" ariaHidden="true" icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarContent;
