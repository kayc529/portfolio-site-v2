'use client';

import React, { useContext } from 'react';
import Button from './Button';
import { SideBarContext } from '@/utils/SideBarContext';

interface Props {
  vertical?: boolean;
}

const Navbar = ({ vertical = false }: Props) => {
  const { isSidebarOpened, setIsSidebarOpened } = useContext(SideBarContext);

  const closeSideBar = () => {
    if (setIsSidebarOpened && isSidebarOpened) {
      setIsSidebarOpened(false);
    }
  };

  const openResume = () => {
    window.open('kay-yan-cheung-resume.pdf');
  };

  return (
    <ul
      className={`nav-bar ${
        vertical ? 'flex flex-col mx-auto text-center' : 'hidden'
      } w-max gap-6 font-mono md:flex md:items-center`}
    >
      <li>
        <a
          href='#about'
          className='fadeIn delay-2 nav-menu-item'
          onClick={closeSideBar}
        >
          About
        </a>
      </li>
      <li>
        <a
          href='#experience'
          className='fadeIn delay-3 nav-menu-item'
          onClick={closeSideBar}
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href='#work'
          className='fadeIn delay-4 nav-menu-item'
          onClick={closeSideBar}
        >
          Work
        </a>
      </li>
      <li>
        <a
          href='#contact'
          className='fadeIn delay-5 nav-menu-item'
          onClick={closeSideBar}
        >
          Contact
        </a>
      </li>
      <li className={`${vertical ? 'mt-7' : ''} fadeIn delay-6`}>
        <Button text='resume' small={true} onButtonClick={openResume} />
      </li>
    </ul>
  );
};

export default Navbar;
