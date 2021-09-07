import clsx from 'clsx';
import React, { ReactNode } from 'react';
import theme from '../../theme/default';

export interface TextProps {
  children: ReactNode
  className?: string;
}

const Text = ({ children, className }: TextProps) => (
  <div className={clsx(theme.text, className)}>{children}</div>
);

export default Text;
