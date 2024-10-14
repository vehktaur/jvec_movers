import { assets } from '@/assets/assets';
import Image from 'next/image';

const Card = ({ img, caption }) => {
  return (
    <div>
      <div className='mb-[0.89rem] max-h-[22rem] max-w-[24.75rem] overflow-hidden rounded-[0.84rem] md:mb-4 md:rounded-[0.94rem]'>
        <Image className='size-full object-cover' src={img} alt={caption} placeholder='blur' />
      </div>

      <p className='text-center font-medium ~text-lg/2xl'>{caption}</p>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className='padding-inline relative bg-our-team bg-cover bg-no-repeat ~pt-[4.4rem]/[2.4rem] ~pb-[6.5rem]/[5.5rem]'>
      <div className='absolute inset-0 z-0 bg-black bg-opacity-90' />
      <div className='relative z-[1] mx-auto max-w-7xl text-white'>
        <h2 className='section-heading mb-2 text-red-500'>Our Team</h2>
        <h3 className='section-subheading'>Highly trained professionals in</h3>

        <div className='grid ~mt-8/[5.81rem] ~gap-6/[2.88rem] sm:grid-cols-3'>
          <Card img={assets.moving_techniques} caption='Moving Techniques' />
          <Card img={assets.safety_protocols} caption='Safety Protocols' />
          <Card
            img={assets.cs_standards}
            caption='Customer Service Standards'
          />
        </div>

        <p className='mx-auto max-w-[79rem] text-center ~text-sm/lg ~mt-8/[4.31rem]'>
          Our team comprises highly trained professionals who can handle moves
          of all sizes, from small apartments to large commercial relocations.
          Led by our founder and CEO,{' '}
          <span className='text-red-primary'>Joshua</span>, we are committed to
          excellence in every move. Our staff undergoes rigorous training in
          moving techniques, safety protocols, and customer service standards to
          ensure your belongings are handled with the utmost care and
          professionalism.
        </p>

        <a
          href='#'
          className='mx-auto block max-w-[10.875rem] bg-red-primary text-center font-medium text-white ~mt-6/10 ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem]'
        >
          Learn More
        </a>
      </div>
    </section>
  );
};
export default OurTeam;
