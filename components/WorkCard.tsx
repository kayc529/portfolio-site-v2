import { Work } from '@/data/work';
import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { TbExternalLink } from 'react-icons/tb';

interface Props {
  work: Work;
  odd: boolean;
}

const WorkCard = ({ work, odd }: Props) => {
  const { name, desc, link, github, tech, picture } = work;

  return (
    <article className='--reveal relative w-full mx-auto flex flex-col items-center md:flex-row gap-4 md:even:flex-row-reverse xl:w-5/6'>
      {/* image */}
      <div className='relative w-full overflow-hidden md:w-1/2 hover:drop-shadow-lg'>
        <div className='relative'>
          <img
            className='block w-full h-auto rounded-lg object-cover'
            src={picture}
            alt=''
          />
          <div className='img-shade absolute top-0 left-0 w-full h-full bg-gradient-to-b from-greenTransparent to-lightNavyTransparent rounded-lg'></div>
        </div>
      </div>
      {/* info */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center ${
          odd
            ? 'md:right-0 md:text-right md:items-end'
            : 'md:left-0 md:text-left md:items-start'
        }`}
      >
        <p className='text-green'>Featured project</p>

        {/* project name */}
        {link ? (
          <a
            className='w-max text-h5 text-lightSlate font-bold cursor-pointer hover:underline'
            href={link || ''}
            target='_blank'
          >
            {name}
          </a>
        ) : (
          <h3 className='w-max text-h5 text-lightSlate font-bold '>{name}</h3>
        )}

        {/* desc */}
        <p className='my-5 text-slate drop-shadow-md hover:drop-shadow-xl'>
          {desc}
        </p>

        {/* tech used */}
        <div
          className={`w-full flex flex-wrap gap-x-3 ${
            odd ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          {tech.map((t) => (
            <p className='text-sm text-slate font-mono' key={t}>
              #{t}
            </p>
          ))}
        </div>

        {/* Links */}
        <div
          className={`mt-3 flex gap-4 ${
            odd ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          {github.length > 0 && (
            <a href={github[0]} target='_blank' className='--pop-up'>
              <BiLogoGithub className='w-8 h-8 text-lightSlate hover:text-green cursor-pointer' />
            </a>
          )}
          {link && (
            <a href={link} target='_blank' className='--pop-up'>
              <TbExternalLink className='w-8 h-8 text-lightSlate hover:text-green cursor-pointer' />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
