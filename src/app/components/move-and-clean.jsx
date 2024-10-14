import { assets } from '@/assets/assets';
import Image from 'next/image';

const MoveClean = () => {
  return (
    <section className='padding-inline ~py-[3.87rem]/[4.13rem]'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-center justify-between gap-10 sm:flex-row'>
          {/* Text content for the move and clean services */}
          <div className='mx-auto max-w-[46.13rem] sm:mx-0'>
            <h2 className='section-heading text-[#535558] ~mb-2/6 sm:text-left'>
              We Move and Clean
            </h2>
            <h3 className='section-subheading ~mb-6/10 sm:text-left'>
              Powered by MD Environmental Services | Professional Cleaning
              Services
            </h3>

            {/* Learn more button*/}
            <a
              href='#'
              className='mx-auto block max-w-[10.875rem] bg-red-primary text-center font-medium text-white ~mt-6/10 ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem] sm:mx-0'
            >
              Learn More
            </a>
          </div>

          {/* Image representing the cleaning services */}
          <div className='mx-auto max-w-[15.44rem] sm:mx-0'>
            <Image
              className='size-full object-contain'
              src={assets.cleaning_services}
              alt='MD Environmental Services'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoveClean;
