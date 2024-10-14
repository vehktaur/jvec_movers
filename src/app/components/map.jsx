import { assets } from '@/assets/assets';
import Image from 'next/image';

const Map = () => {
  return (
    <section className='padding-inline pb-8 ~pt-16/[6.75rem]'>
      <div className='relative mx-auto max-w-6xl'>
        <div className='absolute left-0 top-16 max-w-[16rem] bg-white shadow-md ~px-3/10 ~pt-4/[1.69rem] ~pb-4/[1.94rem] sm:top-20 sm:w-[60%] sm:max-w-[40rem]'>
          <p className='~text-sm/2xl'>
            <strong className='~text-base/xl'>LOCAL:</strong> Serving the
            Tri-Cities area and other cities in Tennessee
          </p>
        </div>
        <div className='absolute right-0 top-[14rem] max-w-[18.87rem] -translate-y-1/2 bg-white shadow-md ~px-3/10 ~pt-4/[1.69rem] ~pb-4/[1.94rem] sm:top-1/2 sm:w-[60%] sm:max-w-[40rem]'>
          <p className='~text-sm/2xl'>
            <strong className='~text-base/xl'>LONG-DISTANCE:</strong> Covering
            moves to Virginia, North Carolina, South Carolina, Atlanta,
            Kentucky, and Washington DC.
          </p>
        </div>

        <h2 className='section-heading mb-[2.81rem]'>Geographic Coverage</h2>

        <div className='mx-auto max-w-[56.57rem]'>
          <Image
            className='size-full object-contain'
            src={assets.map}
            alt='Geographic Coverage'
          />
        </div>
      </div>
    </section>
  );
};
export default Map;
