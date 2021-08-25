import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Icon, IconType } from '../../theme/icons';

interface NextLinkMenuProps {
  icon: IconType;
  name: string;
  to: string;
  isActive?: boolean;
}

const NextLinkMenu = ({
  to, icon, name, isActive,
}: NextLinkMenuProps) => (
  <li className="relative px-6 py-3">
    <Link
      href={to}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
      <a
        className={
            clsx('inline-flex items-center w-full text-sm font-semibold transition-colors duration-150',
              'hover:text-gray-800 dark:hover:text-gray-200',
              isActive && 'text-gray-800 dark:text-gray-100')
          }
      >
        {isActive && (
        <span
          className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        />
        )}
        <Icon className="w-5 h-5" ariaHidden="true" icon={icon} />
        <span className="ml-4">{name}</span>
      </a>
    </Link>
  </li>
);

export default NextLinkMenu;