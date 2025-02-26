'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import variants from '@/utils/variants';

const WhatWeRepresent = () => {
  return (
    <section className='padding-inline bg-[#EAEAEA] ~pt-[3.31rem]/[9.12rem] ~pb-[3.31rem]/32'>
      {/* Section Container */}
      <div className='mx-auto max-w-7xl overflow-x-hidden'>
        {/* Flex container */}
        <div className='flex flex-col items-center justify-center sm:flex-row'>
          {/* Image container */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={variants.slideInLeft}
            viewport={{ once: true }}
            className='max-w-[42.25rem] w-full'
          >
            <Image
              className='size-full object-cover'
              src={assets.box_lifting}
              alt='Movers moving boxes'
              placeholder='blur'
              priority={true}
            />
          </motion.div>

          {/* Text container overlapping the image */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={variants.slideInRight}
            viewport={{ once: true }}
            className='-mt-[6rem] relative z-[2] px-[0.69rem] text-white sm:mt-0'
          >
            <div className='max-w-[46rem] bg-[#3B3B3B] px-5 ~pt-[2.88rem]/[3.69rem] ~pb-[2.81rem]/[3.62rem] sm:ml-[-25rem] xl:ml-[-19rem]'>
              {/* Container for headings */}
              <div className='mx-auto max-w-[13rem] sm:max-w-full'>
                <h2 className='section-heading mb-2'>What We Represent</h2>
                <h3 className='section-subheading mb-6'>
                  Stress-Free Moves, Perfect Clean
                </h3>
              </div>

              {/* Paragraph with some description */}
              <p className='mx-auto max-w-[39.25rem] text-center ~text-sm/lg ~mb-6/10'>
                JVEC MOVERS is dedicated to providing top-notch moving and
                cleaning services. Based in Johnson City, Tennessee, we cater to
                both local and long-distance relocations, including moves to
                Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and
                Washington DC. We specialize in making your moving experience as
                smooth and stress-free as possible, from packing and
                transportation to cleaning your new home or office.
              </p>

              {/* Call-to-action button */}
              <a
                href='#'
                className='mx-auto block max-w-[10.875rem] bg-red-primary text-center font-medium text-white transition-all duration-300 ~mt-6/10 ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem] hover:rounded-3xl hover:bg-red-700'
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeRepresent;
