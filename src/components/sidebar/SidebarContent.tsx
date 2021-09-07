import React, { FC, PropsWithChildren } from 'react';
import theme from '../../theme/default';

const SidebarContent: FC<PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren<{}>) => (
  <ul className={theme.sidebar.content}>
    {children}
  </ul>
);

export default SidebarContent;
