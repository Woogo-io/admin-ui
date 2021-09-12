import clsx from 'clsx';
import React from 'react';
import theme from '../../theme/default';
import { SearchIcon } from '../../theme/icons';

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputSearch = ({ className, ...props }: InputProps) => (
  <div className={theme.header.search.wrapper}>
    <div className={theme.header.search.iconContainer}>
      <SearchIcon className={theme.header.search.icon} aria-hidden="true" />
    </div>
    <input
      className={clsx(theme.input.search, className)}
      {...props}
    />
  </div>
);

export default InputSearch;
