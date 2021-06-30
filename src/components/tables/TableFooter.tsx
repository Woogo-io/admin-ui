import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const TableFooter: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => <div className={theme.tableFooter.base}>{children}</div>;

export default TableFooter;
