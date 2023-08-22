'use client';
import { useContext } from 'react';
import { SideBarContext } from '@/utils/SideBarContext';

const ModalShade = () => {
  const { isSidebarOpened, setIsSidebarOpened } = useContext(SideBarContext);

  const toggle = () => {
    if (setIsSidebarOpened) {
      setIsSidebarOpened((prev) => !prev);
    }
  };

  return (
    <div
      className={`modal-shade ${
        isSidebarOpened ? 'active' : ''
      } z-40 fixed w-full h-full md:hidden`}
      onClick={toggle}
    ></div>
  );
};

export default ModalShade;
