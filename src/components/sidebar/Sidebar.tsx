import clsx from 'clsx';
import React, {
  FC, PropsWithChildren, useEffect, useRef,
} from 'react';
import { useSidebar } from '../providers';

import SidebarContent from './SidebarContent';

const Sidebar: FC<PropsWithChildren<{}>> = (props: PropsWithChildren<{}>) => {
  const { isSidebarOpen, setIsSidebarOpen, buttonRef } = useSidebar();

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current
        && buttonRef.current
        && !ref.current.contains(event.target)
        && !buttonRef.current.contains(event.target)) setIsSidebarOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, buttonRef]);

  return (
    <aside
      ref={ref}
      className={clsx('z-10 flex-shrink-0 w-64 overflow-y-auto bg-white dark:bg-gray-800',
        'fixed top-0 pt-16 left-0 h-full transition-all transform',
        !isSidebarOpen && '-translate-x-64')}
    >
      <SidebarContent {...props} />
    </aside>
  );
};

export default Sidebar;
