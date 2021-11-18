import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

export type CardBodyProps = {
  className?: string;
};

const CardBody: FC<PropsWithChildren<CardBodyProps>> = ({
  className,
  children,
}: PropsWithChildren<CardBodyProps>) => <div className={clsx(theme.cardBody.base, className)}>{children}</div>;

export default CardBody;
