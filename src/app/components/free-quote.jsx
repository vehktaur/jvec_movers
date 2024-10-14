import { assets } from '@/assets/assets';
import Image from 'next/image';

const FreeQuote = () => {
  return (
    <section className='padding-inline bg-[#101010] ~pt-[3.38rem]/[6.12rem] ~pb-[4.53rem]/[6.12rem]'>
      <div className='mx-auto max-w-7xl'>
        {/* Container with a flexible layout */}
        <div className='flex w-full flex-col items-center ~gap-6/[6.5rem] sm:flex-row'>
          {/* Left section with heading and description */}
          <div className='max-w-[24.12rem] text-white'>
            <h3 className='section-subheading ~mb-2/8 sm:text-left'>
              Ready for a Stressless Move? Get your Free Quote
            </h3>

            <p className='text-center sm:text-left'>
              Fill out our online booking form to schedule your move with JVEC
              MOVERS. Provide details about your move, and we’ll get back to you
              with a customized plan and quote,
            </p>
          </div>

          {/* Right section with quote heading and arrow */}
          <div className='w-full'>
            <h2 className='flex items-center justify-between font-medium text-red-light ~text-3xl/5xl slg:~text-[2.5rem]/[4.49rem]'>
              Free Quote
              <button className='ml-auto ~w-10/[5.69rem]'>
                <Image
                  className='w-full object-contain'
                  src={assets.arrow_right}
                  alt='arrow right'
                />
              </button>
            </h2>

            <hr className='border-red-light ~mt-[0.8rem]/[4.4rem]' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FreeQuote;
