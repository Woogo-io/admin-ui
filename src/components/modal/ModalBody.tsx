import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const ModalBody: FC<PropsWithChildren<{}>> = (
  props: PropsWithChildren<{}>,
) => {
  const { children } = props;
  return (
    <div className={theme.modalBody.base}>
      {children}
    </div>
  );
};

export default ModalBody;
