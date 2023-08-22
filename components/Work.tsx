import React from 'react';
import Title from './Title';
import { Work, work } from '@/data/work';
import WorkCard from './WorkCard';

const Work = () => {
  return (
    <section id='work' className='content-container flex flex-col'>
      <Title text="things i've built" />
      <div className='flex flex-col gap-y-20'>
        {work.map((w: Work, index) => (
          <WorkCard key={w.id} work={w} odd={(index + 1) % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Work;
