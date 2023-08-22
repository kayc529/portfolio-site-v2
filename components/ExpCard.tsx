'use client';

import { Experience } from '@/data/experience';
import { BiRightArrow, BiLinkAlt } from 'react-icons/bi';
import { TbExternalLink } from 'react-icons/tb';
import TechTag from './TechTag';
interface Props {
  exp: Experience;
}

const ExpCard = ({ exp }: Props) => {
  const { title, company, duration, desc, companyLink, techUsed, product } =
    exp;

  const goToSite = (site: string) => {
    window.open(site);
  };

  return (
    <article className='fadeIn exp-card flex rounded-lg' key={exp.company}>
      <div className='flex flex-col'>
        {/* Title + Company Name */}
        <div className='exp-card-title flex gap-x-2 items-center'>
          <p className='text-lg text-white'>
            {title}．
            <a
              className='link cursor-pointer hover:underline'
              href={companyLink}
              target='_blank'
            >
              {company}
            </a>
          </p>
          <TbExternalLink className='link w-6 h-6 text-white' />
        </div>

        {/* Duration */}
        <p className='whitespace-nowrap uppercase text-slate text-sm font-mono'>
          {duration}
        </p>

        {/* Job desciption */}
        <ul className='pt-7 flex flex-col gap-y-3'>
          {desc.map((d) => (
            <li className='flex gap-2' key={d}>
              <div className='h-full'>
                <BiRightArrow className='w-3 h-3 text-green' />
              </div>
              <p className='-mt-[6px] text-slate'>{d}</p>
            </li>
          ))}
        </ul>

        {/* Product */}
        {product && (
          <div className='pt-7 flex items-center gap-x-2 text-lightSlate cursor-pointer hover:text-green'>
            <BiLinkAlt className='w-4 h-4' />
            <a className='hover:underline' href={product[1]} target='_blank'>
              {product[0]}
            </a>
          </div>
        )}

        <div className='py-7 flex flex-wrap gap-2'>
          {techUsed.map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExpCard;
