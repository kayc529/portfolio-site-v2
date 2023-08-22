'use client';

import React from 'react';
import Button from './Button';

const Hero = () => {
  const openResume = () => {
    window.open('kay-yan-cheung-resume.pdf');
  };

  return (
    <section
      id='hero'
      className='fadeIn delay-hero hero content-container h-screen flex'
    >
      <div className='flex flex-col text-center md:text-start'>
        <h5 className='pb-6 text-lg text-green font-mono'>
          Hello, world! My name is
        </h5>
        <h1 className='text-h2 text-lightestSlate font-bold md:text-h1'>
          Kay Cheung
        </h1>
        <h1 className='text-h2 text-h1 text-slate font-bold leading-11 md:text-h1'>
          I build amazing stuff ✨
        </h1>
        <p className='w-full py-10 text-slate lg:w-[550px]'>
          I am a highly motivated and results-driven software developer
          specializing in front-end development, complemented by occasional
          backend development.
        </p>
        <div className='w-full flex justify-center md:justify-start'>
          <Button text='download my resume' onButtonClick={openResume} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
