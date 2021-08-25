import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

export type ModalProps = {
  size: 'small' | 'regular' | 'large'
  isOpen: boolean;
};

const Modal: FC<PropsWithChildren<ModalProps>> = (
  props: PropsWithChildren<ModalProps>,
) => {
  const { children, size, isOpen } = props;
  if (isOpen) {
    return (
      <>
        <div className={theme.modal.base}>
          <div className={clsx(theme.modal.sizer, size === 'small' && 'max-w-sm', size === 'regular' && 'max-w-3xl', size === 'large' && 'max-w-6xl')}>
            <div className={theme.modal.content}>
              {children}
            </div>
          </div>
        </div>
        <div className={theme.modal.background} />
      </>
    );
  }
  return <></>;
};

export default Modal;
