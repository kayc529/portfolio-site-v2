'use client';

import React, { useEffect, useState } from 'react';
import Title from './Title';
import Button, { ButtonType } from './Button';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mknljdpl');
  const [data, setData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (state.succeeded) {
      alert('Thank you! I will get back to you soon :)');
    }
  }, [state]);

  const handleInputChange = (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let val = e?.target.value;
    let name = e?.target.name;
    if (val && name) {
      let temp: any = { ...state };
      temp[name] = val;
      setData(temp);
    }
  };

  return (
    <section
      id='contact'
      className='--reveal content-container pb-[100px] flex flex-col items-center'
    >
      <Title text='Contact' />
      <h1 className='text-h2 text-lightestSlate tracking-1 font-bold md:text-h1'>
        Let's get in touch!
      </h1>
      <p className='w-full pt-6 pb-12 text-slate text-center md:w-2/3 lg:w-1/2'>
        Have a question or want to work together? Leave your details and I'll
        get back to you as soon as possible.
      </p>
      <form
        className='w-full flex flex-col gap-y-2 md:w-2/3 lg:w-1/2'
        onSubmit={handleSubmit}
      >
        <label className='text-lightestSlate font-mono' htmlFor='email'>
          Email
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='h-10 px-4 text-lightSlate bg-lightSlateTransparent border border-green rounded-sm'
        />
        <ValidationError field='email' prefix='Email' errors={state.errors} />
        <label className='text-lightestSlate font-mono' htmlFor='message'>
          Message
        </label>
        <textarea
          className='px-4 py-4 text-lightSlate bg-lightSlateTransparent border border-green rounded-sm'
          onChange={handleInputChange}
        ></textarea>
        <ValidationError
          field='message'
          prefix='Message'
          errors={state.errors}
        />
        <div className='w-full mt-4 flex justify-center md:justify-end'>
          <Button
            text='submit'
            type={ButtonType.submit}
            disabled={state.submitting}
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
