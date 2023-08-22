'use client';

import React, { ChangeEvent, useContext } from 'react';
import { SideBarContext } from '@/utils/SideBarContext';
const MenuButton = () => {
  const { isSidebarOpened, setIsSidebarOpened } = useContext(SideBarContext);

  const onButtonClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setIsSidebarOpened) {
      setIsSidebarOpened(e.target.checked);
    }
  };

  return (
    <div className='relative'>
      <input
        id='menu-button'
        className='menu-button'
        type='checkbox'
        onChange={onButtonClicked}
        checked={isSidebarOpened}
      />
      <label htmlFor='menu-button'></label>
      <div className='absolute top-1/2 w-[30px] h-[3px] bg-lightestSlate'></div>
    </div>
  );
};

export default MenuButton;
