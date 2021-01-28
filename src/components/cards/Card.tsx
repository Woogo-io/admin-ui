import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

type CardProps = {
  colored?: boolean;
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  colored,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={clsx(
        theme.card.base,
        !colored && theme.card.default,
        colored && 'bg-purple-600 text-white',
      )}
    >
      {children}
    </div>
  );
};

export default Card;
