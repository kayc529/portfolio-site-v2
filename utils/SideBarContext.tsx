'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface SideBarContextProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: Dispatch<SetStateAction<boolean>> | null;
}

export const SideBarContext = createContext<SideBarContextProps>({
  isSidebarOpened: false,
  setIsSidebarOpened: null,
});

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <SideBarContext.Provider value={{ isSidebarOpened, setIsSidebarOpened }}>
      {children}
    </SideBarContext.Provider>
  );
};
