'use client';

import { useContext } from 'react';
import { SideBarContext } from '@/utils/SideBarContext';
import Navbar from './Navbar';

const SideBar = () => {
  const { isSidebarOpened, setIsSidebarOpened } = useContext(SideBarContext);

  const close = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setIsSidebarOpened) {
      setIsSidebarOpened(e.target.checked);
    }
  };

  return (
    <aside
      className={`sidebar ${
        isSidebarOpened ? 'open' : ''
      } z-50 fixed top-0 right-0 h-full w-1/2 bg-lightNavy drop-shadow-xl flex flex-col md:hidden`}
    >
      <div className='relative w-full py-8 px-4 flex flex-col items-end'>
        <input
          id='sidebar-close-btn'
          type='checkbox'
          className='sidebar-close-btn w-0 h-0'
          onChange={close}
          checked={isSidebarOpened}
        />
        <label htmlFor='sidebar-close-btn'></label>
      </div>
      <div className='mt-10'>
        <Navbar vertical={true} />
      </div>
    </aside>
  );
};

export default SideBar;
