import React, { MutableRefObject } from 'react';

type SidebarContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  buttonRef: MutableRefObject<HTMLButtonElement>;
};

const SidebarContext = React.createContext<SidebarContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: (sidebar: boolean) => console.warn('no sidebar provider && ', sidebar),
  buttonRef: null,
});

export default SidebarContext;
