'use client';

import { Typewriter } from 'react-simple-typewriter';

import Image from 'next/image';
import { assets } from '@/assets/assets';

const Hero = () => {
  return (
    <section className='bg-gray-slate'>
      <div className='mx-auto flex w-full max-w-[100rem] flex-col text-center text-white sm:flex-row sm:text-left'>
        <div className='px-5 ~pt-[3.44rem]/[8.66rem] ~pb-[3.49rem]/[13.41rem] sm:ms-auto sm:px-10'>
          <div className='max-w-[42.62rem] sm:ms-auto'>
            <h1 className='grid font-extrabold ~text-[2.13rem]/[4.34rem]'>
              <div className='leading-normal'>
                <span className='text-red-light'>MOVE</span> WITH CONFIDENCE:
              </div>
              <span className='font-medium leading-none ~text-[1.5rem]/[3.36rem]'>
                Smooth Moves Start Here
              </span>
            </h1>

            <p className='min-h-8 ~text-base/[1.3125rem] ~my-[0.82rem]/6'>
              <Typewriter
                words={['Professional and affordable. Fully insured.']}
                loop={false}
              />
            </p>
          </div>

          <a
            href='#'
            className='max-w-[11rem] bg-red-primary text-center font-medium ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem]'
          >
            Get Started
          </a>
        </div>
        <div className='max-w-[42.19rem] [transform:rotateY(180deg)] sm:rotate-0 xl:[transform:rotateY(180deg)]'>
          <Image
            className='size-full object-cover'
            src={assets.box_holding}
            alt='Movers holding boxes'
            placeholder='blur'
            width={600}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
