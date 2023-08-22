'use client';
import React from 'react';
import SocialMediaNavbar from './SocialMediaNavbar';
import { toast } from 'react-toastify';

const Sides = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('kay.cheung529@gmail.com');
    toast.success('Copied email!');
  };

  return (
    <>
      <div className='fadeIn delay-7 hidden fixed bottom-0 left-5 flex-col items-center gap-10 md:flex'>
        <SocialMediaNavbar vertical={true} />
        <div className='w-px h-[120px] bg-lightSlate'></div>
      </div>

      <div className='fadeIn delay-8 hidden fixed bottom-[168px] -right-[148px] flex items-center gap-10 rotate-90 md:flex'>
        <p
          className='--pop-left text-sm text-lightSlate font-mono cursor-pointer hover:text-green'
          onClick={copyToClipboard}
        >
          kay.cheung529@gmail.com
        </p>
        <div className='w-[120px] h-px bg-lightSlate'></div>
      </div>
    </>
  );
};

export default Sides;
