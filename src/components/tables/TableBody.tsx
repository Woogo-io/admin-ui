import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const TableBody: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => <tbody className={theme.tableBody.base}>{children}</tbody>;

export default TableBody;
