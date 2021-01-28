import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import theme from '../../theme/default';

type BadgeProps = {
  type: 'success' | 'danger' | 'warning' | 'neutral' | 'primary';
};

const Badge: FC<PropsWithChildren<BadgeProps>> = (
  props: PropsWithChildren<BadgeProps>,
) => {
  const { children, type } = props;
  return (
    <span className={clsx(theme.badge.base, theme.badge[type])}>
      {children}
    </span>
  );
};

export default Badge;
