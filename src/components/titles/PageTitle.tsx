import React, { FC, PropsWithChildren } from 'react';
import theme from '../../theme/default';

const PageTitle: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return <h1 className={theme.pageTitle.base}>{children}</h1>;
};

export default PageTitle;
