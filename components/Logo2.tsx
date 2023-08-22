'use client';

import { useRouter } from 'next/navigation';

const Logo2 = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.replace('/');
  };
  return (
    <div className='fadeIn relative cursor-pointer' onClick={goToHomePage}>
      <div className='z-30 logo relative w-[40px] h-[40px] border-[3.5px] border-green bg-lightNavy flex justify-center items-center rounded-md'>
        <h1 className='text-lg text-green text-center'>K</h1>
        <div className='absolute -top-1 right-6 w-[40px] h-[50px] bg-navy'></div>
      </div>
    </div>
  );
};

export default Logo2;
