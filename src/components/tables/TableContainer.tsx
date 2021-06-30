import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const TableContainer: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => (
  <div className={theme.tableContainer.base}>
    <div className="w-full overflow-x-auto">{children}</div>
  </div>
);

export default TableContainer;
