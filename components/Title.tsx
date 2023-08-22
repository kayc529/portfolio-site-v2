import React from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

interface Props {
  text: string;
}
const Title = ({ text }: Props) => {
  return (
    <div className='w-full pb-10'>
      <div className='w-full flex items-center justify-between lg:w-1/2'>
        <BiSolidDownArrow className='min-w-[20px] min-h-[20px] text-green mr-2' />
        <h3 className='w-max whitespace-nowrap capitalize text-h4 text-lightestSlate font-semibold'>
          {text}
        </h3>
        <div className='w-full h-px ml-4 bg-slate'></div>
      </div>
    </div>
  );
};

export default Title;
