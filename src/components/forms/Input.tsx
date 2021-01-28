import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

type InputProps = {
  name?: string;
  className?: string;
  placeholder?: string;
  ariaLabel?: string;
  value?: string;
  type?: 'text' | 'radio' | 'checkbox' | 'password';
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

const Input: FC<PropsWithChildren<InputProps>> = ({
  name,
  className,
  placeholder,
  ariaLabel,
  disabled,
  valid,
  invalid,
  type,
  value,
  children,
}: PropsWithChildren<InputProps>) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      className={clsx(
        (type === 'text' || type === 'password') && theme.input.base,
        type === 'checkbox' && theme.input.checkbox,
        type === 'radio' && theme.input.radio,
        !disabled && !valid && !invalid && theme.input.active,
        valid && theme.input.valid,
        invalid && theme.input.invalid,
        className,
        disabled && theme.input.disabled,
      )}
      placeholder={placeholder}
      aria-label={ariaLabel}
    >
      {children}
    </input>
  );
};

Input.defaultProps = {
  name: undefined,
  className: undefined,
  placeholder: undefined,
  ariaLabel: undefined,
  value: undefined,
  type: 'text',
  disabled: false,
  valid: false,
  invalid: false,
};

export default Input;
