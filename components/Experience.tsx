'use client';

import React, { useState } from 'react';
import Title from './Title';
import CompanyList from './CompanyList';
import ExpCard from './ExpCard';
import { experience } from '@/data/experience';

const Experience = () => {
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  return (
    <section
      id='experience'
      className='--reveal content-container flex flex-col'
    >
      <Title text={"where i've worked"} />
      <div className='w-full mx-auto md:w-4/5 lg:w-2/3'>
        <div className='flex flex-col gap-y-8 md:flex-row md:gap-x-8 md:gap-y-0'>
          <CompanyList
            chosenIndex={chosenIndex}
            onCompanyPicked={setChosenIndex}
          />
          <ExpCard exp={experience[chosenIndex || 0]} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
