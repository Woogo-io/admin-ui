import clsx from 'clsx';
import React, { FC, PropsWithChildren, useState } from 'react';

import theme from '../../theme/default';

export type ButtonProps = {
  id?: string;
  testId?: string;
  size?: 'larger' | 'large' | 'regular' | 'small';
  primary?: boolean;
  outline?: boolean;
  link?: boolean;
  block?: boolean;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  id,
  testId,
  size,
  primary,
  outline,
  link,
  block,
}: PropsWithChildren<ButtonProps>) => {
  const [active, setActive] = useState(false);
  return (
    <button
      id={id}
      data-testid={testId}
      onClick={() => setActive((prevState) => !prevState)}
      className={clsx(
        theme.button,
        size && theme.button.size[size],
        primary && [
          theme.button.primary.base,
          active && theme.button.primary.active,
        ],
        outline && [
          theme.button.outline.base,
          active && theme.button.outline.active,
        ],
        link && [theme.button.link.base, active && theme.button.link.active],
        block && theme.button.block,
      )}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  id: undefined,
  testId: undefined,
  size: 'regular',
  primary: false,
  outline: false,
  link: false,
  block: false,
};

export default Button;
