import React, {
  FC, PropsWithChildren, useContext, useRef, useState,
} from 'react';

import SidebarContext from '../contexts/SidebarContext';

export const SidebarProvider: FC<PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren<{}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        buttonRef,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
