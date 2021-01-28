import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const TableRow: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return <tr className={theme.tableRow.base}>{children}</tr>;
};

export default TableRow;
