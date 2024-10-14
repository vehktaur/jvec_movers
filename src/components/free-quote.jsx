import arrow_right from '../assets/arrow-right.svg';

const FreeQuote = () => {
  return (
    <section className='padding-inline bg-[#101010] ~pt-[3.38rem]/[6.12rem] ~pb-[4.53rem]/[6.12rem]'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex w-full flex-col items-center ~gap-6/[6.5rem] sm:flex-row'>
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

          <div className='w-full'>
            <h2 className='slg:~text-[2.5rem]/[4.49rem] flex items-center justify-between font-medium text-red-light ~text-3xl/5xl'>
              Free Quote
              <span className='ml-auto ~w-10/[5.69rem]'>
                <img
                  className='w-full object-contain'
                  src={arrow_right}
                  alt=''
                />
              </span>
            </h2>

            <hr className='border-red-light ~mt-[0.8rem]/[4.4rem]' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FreeQuote;
