'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ClientsWeServe = () => {
  // Array of client data
  const clients = [
    {
      title: 'Homeowners',
      description:
        'Whether moving across town or to a new state, we help homeowners transition smoothly.',
      icon: assets.homeowners,
    },
    {
      title: 'Renters',
      description:
        'We assist renters with their moves, ensuring they leave their rental properties clean and in good condition.',
      icon: assets.renters,
    },
    {
      title: 'Businesses',
      description:
        'Our commercial moving services help businesses relocate with minimal disruption.',
      icon: assets.businesses,
    },
    {
      title: 'Property Managers',
      description:
        'We partner with property managers to offer seamless moving services for their tenants.',
      icon: assets.property_managers,
    },
  ];

  return (
    <section className='padding-inline ~pt-10/20 ~pb-24/36'>
      <div className='mx-auto max-w-7xl'>
        {/* Section heading */}
        <h2 className='section-heading mb-2 text-[#535558]'>
          Clients we Serve
        </h2>

        {/* Subheading */}
        <h3 className='section-subheading'>Our services cater to</h3>

        {/* Swiper component for client slides */}
        <Swiper
          modules={[Autoplay]}
          className='~mt-8/20'
          slidesPerView={'auto'}
          autoplay={(true, { delay: 2000 })}
          spaceBetween={20}
        >
          {clients.map(({ title, description, icon }, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: 'auto',
                maxWidth: '19rem',
              }}
            >
              <div className='h-full bg-[#F4F4F4] py-6 ~px-6/[1.63rem]'>
                {/* Client title */}
                <h4 className='mb-[1.62rem] font-semibold uppercase ~text-base/xl sm:mb-4'>
                  {title}
                </h4>

                {/* Circular icon container */}
                <div className='flex items-center justify-center overflow-hidden rounded-full bg-[#EAEAEA] p-4 ~mb-[1.62rem]/8 ~size-[5.13rem]/[8.19rem]'>
                  <Image
                    className='block object-contain'
                    src={icon}
                    alt={title}
                  />
                </div>

                {/* Client description */}
                <p className='~text-sm/lg'>{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default ClientsWeServe;
