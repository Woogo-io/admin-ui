import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { Icon, IconType } from '../../theme/icons';
import theme from '../../theme/default';

interface NextLinkMenuProps {
  icon: IconType;
  name: string;
  to: string;
}

const NextLinkMenu = ({
  to, icon, name,
}: NextLinkMenuProps) => {
  const { asPath } = useRouter();
  const isActive = to === asPath;

  return (
    <li className={theme.linkMenu.default}>
      <Link
        href={to}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
        <a
          className={clsx(theme.linkMenu.link, isActive && theme.linkMenu.active)}
        >
          {isActive && (
          <span
            className={theme.linkMenu.bar}
            aria-hidden="true"
          />
          )}
          <Icon className={theme.linkMenu.icon} ariaHidden="true" icon={icon} />
          <span className={theme.linkMenu.text}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default NextLinkMenu;
