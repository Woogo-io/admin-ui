import React from 'react';

type SidebarContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

const SidebarContext = React.createContext<SidebarContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: (sidebar: boolean) =>
    console.warn('no sidebar provider && ', sidebar),
});

export default SidebarContext;
