import React, { FC, PropsWithChildren } from 'react';

export type SidebarProps = {
  website: string;
  url: string;
};

const SidebarContent: FC<PropsWithChildren<SidebarProps>> = ({
  children,
  website,
  url,
}: PropsWithChildren<SidebarProps>) => (
  <div className="py-4 text-gray-500 dark:text-gray-400">
    <a
      className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
      href={url}
    >
      {website}
    </a>
    <ul className="mt-6">
      {children}
    </ul>
  </div>
);

export default SidebarContent;
