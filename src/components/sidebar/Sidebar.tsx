import clsx from 'clsx';
import React, {
  FC, PropsWithChildren, useEffect, useRef,
} from 'react';
import { useSidebar } from '../providers';
import theme from '../../theme/default';

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
      className={clsx(theme.sidebar.default, !isSidebarOpen && theme.sidebar.close)}
    >
      <SidebarContent {...props} />
    </aside>
  );
};

export default Sidebar;
