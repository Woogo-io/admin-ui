import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import { useSidebar } from '../providers';

import SidebarContent from './SidebarContent';

const Sidebar: FC<PropsWithChildren<{}>> = (props: PropsWithChildren<{}>) => {
  const { isSidebarOpen } = useSidebar();
  return (
    <aside className={clsx('z-10 flex-shrink-0 w-64 overflow-y-auto bg-white dark:bg-gray-800',
      'fixed top-0 pt-16 left-0 h-full transition-all transform',
      !isSidebarOpen && '-translate-x-64')}
    >
      <SidebarContent {...props} />
    </aside>
  );
};

export default Sidebar;
