import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';
import { Icon, IconType } from '../../theme/icons';

export type ButtonProps = {
  disabled?: boolean;
  onClick?: (e: any) => void;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'larger' | 'large' | 'regular' | 'small' | 'normal';
  styleType?: 'primary' | 'outline' | 'link'
  className?: string;
  icon?: IconType;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  disabled,
  onClick,
  id,
  type,
  size,
  styleType,
  className,
  icon,
}: PropsWithChildren<ButtonProps>) => (
  <button
    id={id}
    onClick={onClick}
    type={type}
    className={clsx(
      theme.button.base,
      theme.button.size[size],
      theme.button[styleType],
      disabled && theme.cursorNotAllowed,
      className,
    )}
    disabled={disabled}
  >
    {icon ? (
      <>
        {children ? (
          <div className={theme.button.iconContainer}>
            <Icon icon={icon} ariaHidden={icon} className={theme.button.icon[size]} />
            <span>{children}</span>
          </div>
        ) : <Icon icon={icon} ariaHidden={icon} className={theme.button.icon[size]} /> }
      </>
    ) : children }

  </button>
);

Button.defaultProps = {
  onClick: undefined,
  id: undefined,
  disabled: false,
  type: 'button',
  styleType: 'primary',
  size: 'regular',
  className: undefined,
};

export default Button;
