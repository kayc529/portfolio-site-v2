import React from 'react';
interface Props {
  tech: string;
}
const TechTag = ({ tech }: Props) => {
  return (
    <div className='bg-greenTransparent rounded-xl'>
      <p className='px-3 py-1 text-sm text-green font-mono'>{tech}</p>
    </div>
  );
};

export default TechTag;
