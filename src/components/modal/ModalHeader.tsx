import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';
import { CloseIcon } from '../../theme/icons';

export type ModalHeaderProps = {
  onClose: () => void;
};

const ModalHeader: FC<PropsWithChildren<ModalHeaderProps>> = (
  props: PropsWithChildren<ModalHeaderProps>,
) => {
  const { children, onClose } = props;
  return (
    <div className={theme.modalHeader.base}>
      <h3 className={theme.modalHeader.title}>{children}</h3>
      <button
        className={theme.modalHeader.closeButton}
        onClick={onClose}
      >
        <CloseIcon className={theme.modalHeader.closeCross} />
      </button>
    </div>
  );
};

export default ModalHeader;
