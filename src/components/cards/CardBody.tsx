import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import theme from '../../theme/default';

type CardBodyProps = {
  className?: string;
};

const CardBody: FC<PropsWithChildren<CardBodyProps>> = ({
  className,
  children,
}: PropsWithChildren<CardBodyProps>) => {
  return <div className={clsx(theme.cardBody.base, className)}>{children}</div>;
};

CardBody.defaultProps = {
  className: '',
};

export default CardBody;
