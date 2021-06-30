import clsx from 'clsx';
import React, { FC, ReactChildren } from 'react';
import { useSidebar } from '../providers';

import { default as SidebarContent } from './SidebarContent';

export type SidebarProps = {
  website: string;
  url: string;
  children: ReactChildren
};

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const {isSidebarOpen} = useSidebar();
  return (
    <aside className={clsx('z-30 flex-shrink-0 w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block fixed top-12 left-0 h-full', !isSidebarOpen && 'hidden')}>
      <SidebarContent {...props} />
    </aside>
  );
};

export default Sidebar;
