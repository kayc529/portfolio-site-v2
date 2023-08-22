import { skills } from '@/data/skills';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

const Skills = () => {
  return (
    <ul className='mx-auto w-max gap-x-4 grid grid-cols-2 gap-y-1 md:mx-0 lg:grid-cols-3 md:gap-x-10'>
      {skills.map((skill) => (
        <li className='flex items-center gap-2' key={skill}>
          <BiRightArrow className='w-3 h-3 text-green' />
          <p className='text-slate font-mono'>{skill}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
