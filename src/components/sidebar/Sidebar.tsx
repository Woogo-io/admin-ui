import React, { FC } from 'react';

import { default as SidebarContent } from './SidebarContent';

export type SidebarProps = {
  website: string;
  url: string;
  routes: {
    path: string;
    icon: string;
    name: string;
  }[];
};

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  return (
    <>
      <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
        <SidebarContent {...props} />
      </aside>
    </>
  );
};

export default Sidebar;
