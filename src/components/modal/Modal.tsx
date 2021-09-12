/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React, {
  FC, PropsWithChildren, useEffect, useRef,
} from 'react';

import theme from '../../theme/default';
import { useTheme } from '../providers';

export type ModalProps = {
  size: 'small' | 'regular' | 'large'
  isOpen: boolean;
  onClose: () => void;
  z?: 0 | 1 | 2 | 3 | 4 | 5
};

const Modal: FC<PropsWithChildren<ModalProps>> = (
  props: PropsWithChildren<ModalProps>,
) => {
  const {
    children, size, isOpen, onClose, z,
  } = props;

  const { setModalOpen } = useTheme();

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) onClose();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (isOpen) setModalOpen(true);
    else setModalOpen(false);

    return () => setModalOpen(false);
  }, [isOpen]);

  if (isOpen) {
    return (
      <>
        <div className={clsx(theme.modal.base, theme.modal.z[z !== undefined ? z : 5])}>
          <div
            ref={ref}
            className={clsx(theme.modal.sizer, theme.modal.size[size])}
          >
            <div className={theme.modal.content}>
              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default Modal;
