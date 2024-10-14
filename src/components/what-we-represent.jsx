import box_lifting from '../assets/box_lifting.jpg';
const WhatWeRepresent = () => {
  return (
    <section className='padding-inline bg-[#EAEAEA] ~pt-[3.31rem]/[9.12rem] ~pb-[3.31rem]/32'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-center sm:flex-row'>
          <div className='max-w-[52.25rem]'>
            <img
              className='size-full object-cover'
              src={box_lifting}
              alt='Movers moving boxes'
            />
          </div>
          <div className='-mt-[6rem] px-[0.69rem] text-white sm:mt-0'>
            <div className='max-w-[46rem] bg-[#3B3B3B] px-5 ~pt-[2.88rem]/[3.69rem] ~pb-[2.81rem]/[3.62rem] sm:ml-[-25rem] xl:ml-[-19rem]'>
              <div className='mx-auto max-w-[13rem] sm:max-w-full'>
                <h2 className='section-heading mb-2'>What We Represent</h2>
                <h3 className='section-subheading mb-6'>
                  Stress-Free Moves, Perfect Clean
                </h3>
              </div>

              <p className='mx-auto max-w-[39.25rem] text-center ~text-sm/lg ~mb-6/10'>
                JVEC MOVERS is dedicated to providing top-notch moving and
                cleaning services. Based in Johnson City, Tennessee, we cater to
                both local and long-distance relocations, including moves to
                Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and
                Washington DC. We specialize in making your moving experience as
                smooth and stress-free as possible, from packing and
                transportation to cleaning your new home or office.
              </p>

              <a
                href='#'
                className='mx-auto block max-w-[10.875rem] bg-red-primary text-center font-medium text-white ~mt-6/10 ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem]'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeRepresent;
