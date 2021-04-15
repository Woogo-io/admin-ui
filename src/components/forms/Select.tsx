import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import theme from '../../theme/default';

export type SelectProps = {
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

const Select: FC<PropsWithChildren<SelectProps>> = ({
  className,
  disabled,
  multiple,
  valid,
  invalid,
  children,
}: PropsWithChildren<SelectProps>) => {
  return (
    <select
      disabled={disabled}
      multiple={multiple}
      className={clsx(
        theme.select.base,
        !disabled && !valid && !invalid && theme.select.active,
        multiple && theme.select.multiple,
        disabled && theme.select.disabled,
        valid && theme.select.valid,
        invalid && theme.select.invalid,
        className,
      )}
    >
      {children}
    </select>
  );
};

Select.defaultProps = {
  className: undefined,
};

export default Select;
