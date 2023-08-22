'use client';

import React, { useEffect } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import MenuButton from './MenuButton';
import {
  addScrollListener,
  removeScrollListener,
  revealAnimatedElements,
} from '@/utils/scroll-helper';

const Header = () => {
  useEffect(() => {
    addScrollListener();
    revealAnimatedElements();
    return () => {
      removeScrollListener();
    };
  }, []);

  return (
    <header
      id='header'
      className='z-30 fixed w-full h-header px-4 bg-navy flex justify-between items-center md:px-12'
    >
      <Logo />
      <Navbar />
      <div className='flex md:hidden'>
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
