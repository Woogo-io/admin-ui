import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

export type CardProps = {
  colored?: boolean;
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  colored,
  children,
}: PropsWithChildren<CardProps>) => (
  <div
    className={clsx(
      theme.card.base,
      colored ? theme.card.colored : theme.card.default,
    )}
  >
    {children}
  </div>
);

export default Card;
