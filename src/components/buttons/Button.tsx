import React, { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';

import theme from '../../theme/default';

type ButtonProps = {
  children: ReactNode;

  size?: 'larger' | 'large' | 'regular' | 'small';
  primary?: boolean;
  outline?: boolean;
  link?: boolean;
  block?: boolean;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { children, size, primary, outline, link, block } = props;
  const [active, setActive] = useState(false);
  return (
    <button
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
  size: 'regular',
  primary: false,
  outline: false,
  link: false,
  block: false,
};

export default Button;
