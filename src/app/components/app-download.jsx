import { assets } from '@/assets/assets';
import Image from 'next/image';

const AppDownload = () => {
  return (
    <section className='padding-inline relative bg-app-download bg-cover bg-no-repeat pb-[4.19rem] pt-[3.81rem] sm:bg-fixed sm:py-[2.62rem]'>
      {/* Background overlay for better text visibility */}
      <div className='absolute inset-0 z-0 bg-black bg-opacity-30' />

      <div className='relative z-[1] mx-auto max-w-7xl text-white'>
        <div className='flex w-full flex-col items-center gap-10 sm:flex-row sm:justify-between'>
          {/* Section heading */}
          <h2 className='section-subheading'>Download The App</h2>

          {/* Download links for app store and play store */}
          <div className='flex flex-col items-center ~gap-6/20 sm:flex-row'>
            <a className='block ~max-w-40/[14.5rem]' href='#'>
              <Image src={assets.app_store} alt='Download on the app store' />
            </a>
            <a className='block ~max-w-40/[14.5rem]' href='#'>
              <Image src={assets.play_store} alt='Get it on play store' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDownload;
