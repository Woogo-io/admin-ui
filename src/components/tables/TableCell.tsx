/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React, { MouseEvent, ReactNode } from 'react';
import theme from '../../theme/default';

export interface TableCellProps {
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLTableCellElement>) => any | Promise<any>
}

const TableCell = ({
  children,
  className,
  onClick,
}: TableCellProps) => <td className={clsx(theme.tableCell.base, className)} onClick={onClick}>{children}</td>;

export default TableCell;
