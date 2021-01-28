import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import theme from '../../theme/default';

type LabelProps = {
  className?: string;
  radio?: boolean;
  disabled?: boolean;
  check?: boolean;
};

const Label: FC<PropsWithChildren<LabelProps>> = ({
  className,
  children,
  radio,
  disabled,
  check,
}: PropsWithChildren<LabelProps>) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={clsx(
        theme.label.base,
        className,
        radio && 'inline-flex items-center',
        disabled && theme.label.disabled,
        check && theme.label.check,
      )}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  className: '',
  radio: false,
  disabled: false,
  check: false,
};

export default Label;
