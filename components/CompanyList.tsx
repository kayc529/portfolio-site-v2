import React from 'react';
import { experience } from '@/data/experience';

interface Props {
  chosenIndex: null | number;
  onCompanyPicked: (index: number) => void;
}

const CompanyList = ({ chosenIndex, onCompanyPicked }: Props) => {
  return (
    <ul className='relative flex flex-row md:flex-col'>
      {experience.map((exp, index) => (
        <button
          className={`w-1/3 h-[50px] border-b-[2px] border-l-0 border-slate font-mono flex justify-center items-center hover:bg-lightSlateTransparent md:w-[150px] md:border-l-[2px] md:border-b-0 ${
            index === chosenIndex
              ? 'bg-lightSlateTransparent text-green'
              : 'text-slate'
          }`}
          key={exp.id}
          onClick={() => onCompanyPicked(index)}
        >
          {exp.company}
        </button>
      ))}
      <div
        className={`hidden pointer point-to-${
          chosenIndex || 0
        } absolute w-[2px] h-[50px] bg-green md:flex`}
      ></div>
      <div
        className={`block pointer point-to-h-${
          chosenIndex || 0
        } absolute top-[48px] w-1/3 h-[2px] bg-green md:hidden`}
      ></div>
    </ul>
  );
};

export default CompanyList;
