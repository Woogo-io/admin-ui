import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

type TextareaProps = {
  className?: string;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  placeholder?: string;
  rows: number;
};

const Textarea: FC<PropsWithChildren<TextareaProps>> = ({
  className,
  disabled,
  valid,
  invalid,
  rows,
  placeholder,
  children,
}: PropsWithChildren<TextareaProps>) => {
  return (
    <textarea
      disabled={disabled}
      rows={rows}
      placeholder={placeholder}
      className={clsx(
        theme.textarea.base,
        !disabled && !invalid && !valid && theme.textarea.active,
        disabled && theme.textarea.disabled,
        valid && theme.textarea.valid,
        invalid && theme.textarea.invalid,
        className,
      )}
    >
      {children}
    </textarea>
  );
};

Textarea.defaultProps = {
  className: undefined,
  placeholder: '',
};

export default Textarea;
