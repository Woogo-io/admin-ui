import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

export type CardProps = {
  colored?: boolean;
  className?: string
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  colored,
  children,
  className,
}: PropsWithChildren<CardProps>) => (
  <div
    className={clsx(
      theme.card.base,
      colored ? theme.card.colored : theme.card.default,
      className,
    )}
  >
    {children}
  </div>
);

export default Card;
