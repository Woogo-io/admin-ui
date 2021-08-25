import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

export type ModalHeaderProps = {
  closeFn: () => void;
};

const ModalHeader: FC<PropsWithChildren<ModalHeaderProps>> = (
  props: PropsWithChildren<ModalHeaderProps>,
) => {
  const { children, closeFn } = props;
  return (
    <div className={theme.modalHeader.base}>
      <h3 className={theme.modalHeader.title}>{children}</h3>
      <button
        className={theme.modalHeader.closeButton}
        onClick={closeFn}
      >
        <span className={theme.modalHeader.closeCross}>
          ×
        </span>
      </button>
    </div>
  );
};

export default ModalHeader;
