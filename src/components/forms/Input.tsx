import clsx from 'clsx';
import React, { FC } from 'react';

import theme from '../../theme/default';

export type InputProps = {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
  placeholder?: string;
  ariaLabel?: string;
  value?: string;
  type?: 'text' | 'email' | 'radio' | 'checkbox' | 'password';
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

const Input: FC<InputProps> = ({
  onChange,
  name,
  className,
  placeholder,
  ariaLabel,
  disabled,
  valid,
  invalid,
  type,
  value,
}: InputProps) => (
  <input
    onChange={onChange}
    name={name}
    type={type}
    value={value}
    disabled={disabled}
    className={clsx(
      (type === 'text' || type === 'password' || type === 'email') && theme.input.base,
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
  />
);

Input.defaultProps = {
  onChange: () => console.log('Have to implement onChange callback'),
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
