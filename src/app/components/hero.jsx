import Image from 'next/image';
import { assets } from '@/assets/assets';
import TypeWriter from './typewriter';

const Hero = () => {
  return (
    <section className='bg-gray-slate'>
      <div className='mx-auto flex w-full max-w-[100rem] flex-col text-center text-white sm:flex-row sm:text-left'>
        {/* Left side: Text content */}
        <div className='px-5 ~pt-[3.44rem]/[8.66rem] ~pb-[3.49rem]/[13.41rem] sm:ms-auto sm:px-10'>
          <div className='max-w-[42.62rem] sm:ms-auto'>
            <h1 className='grid font-extrabold ~text-[2.13rem]/[4.34rem]'>
              {/* Main title */}
              <div className='leading-normal'>
                <span className='text-red-light'>MOVE</span> WITH CONFIDENCE:
              </div>
              {/* Subtitle */}
              <span className='font-medium leading-none ~text-[1.5rem]/[3.36rem]'>
                Smooth Moves Start Here
              </span>
            </h1>

            {/* Dynamic text using Typewriter effect */}
            <p className='min-h-8 ~text-base/[1.3125rem] ~my-[0.82rem]/6'>
              <TypeWriter
                words={['Professional and affordable. Fully insured.']}
                loop={false}
              />
            </p>
          </div>

          {/* CTA button */}
          <a
            href='#'
            className='max-w-[11rem] bg-red-primary text-center font-medium transition-all duration-300 ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem] hover:rounded-3xl hover:bg-red-700'
          >
            Get Started
          </a>
        </div>

        {/* Right side: Image */}
        <div className='w-full max-w-[42.19rem] [transform:rotateY(180deg)] sm:rotate-0 xl:[transform:rotateY(180deg)]'>
          <Image
            className='size-full object-cover'
            src={assets.box_holding}
            alt='Movers holding boxes'
            placeholder='blur'
            priority={true}
        
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
