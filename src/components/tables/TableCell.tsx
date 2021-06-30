import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const TableCell: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => <td className={theme.tableCell.base}>{children}</td>;

export default TableCell;
