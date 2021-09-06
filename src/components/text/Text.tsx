import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode
  className?: string;
}

const Text = ({ children, className }: TextProps) => (
  <div className={clsx('text-gray-700 dark:text-white', className)}>{children}</div>
);

export default Text;
