'use client';

import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { socialMedia } from '@/data/social-media';
import { toast } from 'react-toastify';

interface Props {
  vertical?: boolean;
}

const SocialMediaNavbar = ({ vertical = false }: Props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('kay.cheung529@gmail.com');
    toast.success('Copied email!');
  };

  const getIcon = (socialMedia: string) => {
    switch (socialMedia) {
      case 'github':
        return <FiGithub className='w-6 h-6' />;
      case 'linkedin':
        return <FiLinkedin className='w-6 h-6' />;
      case 'twitter':
        return <FiTwitter className='w-6 h-6' />;
      default:
      case 'github':
        return <FiGithub className='w-6 h-6' />;
    }
  };
  return (
    <ul className={`w-max flex ${vertical ? 'flex-col' : 'flex-row'} gap-4`}>
      {socialMedia.map((s) => (
        <li key={s.socialMedia} className='--pop-up'>
          <a
            className='text-slate hover:text-green'
            href={s.link}
            target='_blank'
          >
            {getIcon(s.socialMedia)}
          </a>
        </li>
      ))}
      <li className='--pop-up block md:hidden' onClick={copyToClipboard}>
        <a className='text-slate hover:text-green cursor-pointer'>
          <HiOutlineMail className='w-6 h-6' />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaNavbar;
