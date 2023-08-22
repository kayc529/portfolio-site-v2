import React from 'react';
import SocialMediaNavbar from './SocialMediaNavbar';

const Footer = () => {
  return (
    <footer className=''>
      <div className='content-container py-8 mx-auto flex flex-col justify-center items-center'>
        <div className='block md:hidden'>
          <SocialMediaNavbar />
        </div>
        <p className='pt-4 text-sm text-slate text-center font-mono md:pt-0'>
          Built by Kay Cheung 2023. Design inspired by{' '}
          <a
            href='https://github.com/bchiang7/v4'
            target='_blank'
            className='hover:text-green hover:underline'
          >
            Brittany Chiang
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
