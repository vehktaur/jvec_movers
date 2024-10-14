'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const blog = {
  img: assets.relocating,
  date: 'JULY 10, 2024',
  title:
    'Settling into a new home: Strategies for an effortless movement, hassle-free',
};

const blogs = [blog, blog, blog, blog];

const Blogs = () => {
  return (
    <section
      id='blogs'
      className='padding-inline bg-gray-slate ~pt-[3.12rem]/[3.81rem] ~pb-[3.51rem]/[4.31rem]'
    >
      <div className='mx-auto max-w-7xl text-center text-white'>
        <h2 className='section-heading ~mb-0/5'>The Smooth Move Blog</h2>
        <h3 className='section-subheading leading-tight ~mb-6/[2.63rem]'>
          Moving and relocation tips and <br /> everything in between
        </h3>

        <p className='mx-auto max-w-[45.37rem]'>
          Check out our blog for helpful tips and guides on making your move as
          smooth as possible/. Topics include packing tips, moving checklists,
          and more.
        </p>

        <div className='mt-16 sm:mt-[2.62rem]'>
          <Swiper
            className='no-scrollbar'
            modules={[Navigation, Pagination]}
            style={{ width: 'auto' }}
            slidesPerView={'auto'}
            spaceBetween={32}
            pagination={{ clickable: true }}
            navigation={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                spaceBetween: 48,
                centeredSlides: false,
              },

              832: {
                spaceBetween: 61,
                centeredSlides: false,
              },
              1120: {
                spaceBetween: 76,
                centeredSlides: false,
              },
            }}
          >
            {blogs.map(({ img, title, date }, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: 'auto',
                }}
              >
                <article className='max-w-[22.5rem] border border-[#535558]'>
                  <div className='w-full'>
                    <Image
                      className='size-full object-cover'
                      src={img}
                      alt={title}
                    />
                  </div>
                  <div className='px-4 pt-6 text-center ~pb-[1.29rem]/[1.31rem] sm:text-left'>
                    <p className='mb-4 text-[#DEDEDE]'>{date}</p>

                    <h4 className='mx-auto max-w-[20ch] ~text-lg/xl sm:mx-0'>
                      {title}
                    </h4>

                    <a
                      href='#'
                      className='mx-auto block max-w-[10.875rem] bg-red-primary font-medium text-white ~mt-6/10 ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem] sm:mx-0'
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
