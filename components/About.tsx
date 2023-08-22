import React from 'react';
import Title from './Title';
import Skills from './Skills';

const About = () => {
  return (
    <section id='about' className='--reveal content-container'>
      <Title text='about me' />
      <article className='flex flex-col-reverse gap-y-10 md:flex-row md:gap-x-8 md:gap-y-0 lg:gap-x-12'>
        <div className='w-full text-slate md:w-3/5 lg:w-4/6'>
          <p>
            Hello! My name is Kay and I'm a software developer with a deep
            passion for building engaging software applications. My programming
            journey started back in 2018 when I decided to make{' '}
            <a
              className='text-green hover:underline'
              href='https://www.youtube.com/channel/UCJx4PHL-Zv14Wwbh5t0TgOQ'
              target='_blank'
            >
              my own mini games
            </a>{' '}
            with Unity3D - they helped me to land my first job as a game
            programmer at a start-up company.
          </p>

          <p className='py-8'>
            My main focus these days is building responsive and intuitive
            full-stack applications on web and mobile. Here are a few
            technologies I’ve been working with recently:
          </p>

          <Skills />
          <p className='py-8'>
            When I'm not coding I like to play the Critically Acclaimed&trade;
            MMORPG FFXIV.
          </p>
        </div>
        <div className='relative w-full flex justify-center items-start md:w-2/5 lg:w-2/6'>
          <img
            className='w-2/3 md:w-full rounded-lg border-4 border-green object-cover'
            src='profile_pic.JPG'
            alt='picture of me'
          />
        </div>
      </article>
    </section>
  );
};

export default About;
