import clsx from 'clsx';
import React, { MouseEvent, ReactNode } from 'react';
import theme from '../../theme/default';

export interface TableRowProps {
  children?: ReactNode
  className?: string;
  onClick?: (e: MouseEvent<HTMLTableRowElement>) => any | Promise<any>;
}

const TableRow = ({
  children,
  className,
  onClick,
}: TableRowProps) => <tr className={clsx(theme.tableRow.base, className)} onClick={onClick}>{children}</tr>;

export default TableRow;
