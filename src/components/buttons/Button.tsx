import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

export type ButtonProps = {
  active?: boolean;
  onClick?: (e: any) => void;
  id?: string;
  testId?: string;
  type?: 'button' | 'submit';
  size?: 'larger' | 'large' | 'regular' | 'small';
  primary?: boolean;
  outline?: boolean;
  link?: boolean;
  block?: boolean;
  className?: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  active,
  onClick,
  id,
  testId,
  type,
  size,
  primary,
  outline,
  link,
  block,
  className,
}: PropsWithChildren<ButtonProps>) => (
  <button
    id={id}
    data-testid={testId}
    onClick={onClick}
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
      // link && [theme.button.link.base],
      block && theme.button.block,
      className,
    )}
      // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
  >
    {children}
  </button>
);
Button.defaultProps = {
  active: false,
  onClick: () => console.log('Have to implement onClick callback'),
  id: undefined,
  testId: undefined,
  type: 'button',
  size: 'regular',
  primary: false,
  outline: false,
  link: false,
  block: false,
  className: undefined,
};

export default Button;
