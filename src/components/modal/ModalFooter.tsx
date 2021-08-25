import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const ModalFooter: FC<PropsWithChildren<{}>> = (
  props: PropsWithChildren<{}>,
) => {
  const { children } = props;
  return (
    <div className={theme.modalFooter.base}>
      {children}
    </div>
  );
};

export default ModalFooter;
