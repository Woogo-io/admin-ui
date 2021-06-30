import React, { FC, PropsWithChildren } from 'react';

const SidebarContent: FC<PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren<{}>) => (
  <ul className="py-4 text-gray-500 dark:text-gray-400">
    {children}
  </ul>
);

export default SidebarContent;
