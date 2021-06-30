import React, { FC, PropsWithChildren } from 'react';

import theme from '../../theme/default';

const TableHeader: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => <thead className={theme.tableHeader.base}>{children}</thead>;

export default TableHeader;
