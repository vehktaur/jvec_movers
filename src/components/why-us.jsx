import globe from '../assets/global_services.svg';
import pricing from '../assets/pricing.svg';
import tracking from '../assets/tracking.svg';
import services from '../assets/services.svg';

const Card = ({ img, className, heading, hr, children }) => {
  return (
    <div>
      <div className={`flex gap-3 sm:px-4 ${className}`}>
        <div className='mt-1 h-fit w-[2.125rem] flex-shrink-0'>
          <img className='size-full object-contain' src={img} alt={heading} />
        </div>
        <div>
          <h4 className='font-semibold uppercase ~text-base/lg ~mb-2/[0.81rem]'>
            {heading}
          </h4>
          <p className='~text-sm/lg'>{children}</p>
        </div>
      </div>

      <hr className={`~my-8/10 sm:border-black ${hr}`} />
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className='bg-why-us mb-[11.2rem] mt-16 bg-cover bg-bottom bg-no-repeat px-5 pb-3 ~pt-[2.31rem]/32'>
      <div className='mx-auto flex w-full max-w-[84.38rem] flex-col justify-between gap-5 lg:flex-row'>
        <div className='mx-auto max-w-[25.81rem] lg:mx-0'>
          <h2 className='section-heading text-[#535558] ~mb-2/6 lg:text-left'>
            WHY CHOOSE US
          </h2>
          <h3 className='section-subheading mb-4 lg:text-left'>
            YOUR PERSONALIZED MOVING SOLUTION
          </h3>
          <p className='mb-10 ~text-sm/lg'>
            Our mission is to provide stress-free, efficient, and courteous
            moving and cleaning services, ensuring seamless transitions for both
            residential and commercial clients. Explore our services and see how
            we can make your next move effortless.
          </p>
          <a
            href='#'
            className='mx-auto block max-w-[10.875rem] bg-red-primary font-medium text-white ~px-[1.33rem]/10 ~py-[0.34rem]/[0.62rem] lg:mx-0 text-center'
          >
            Learn More
          </a>
        </div>
        <div>
          <div className='relative grid max-w-[54rem] flex-col items-start bg-white px-5 shadow-md ~pt-[3.75rem]/[4.26rem] ~pb-[4.17rem]/[6.94rem] sm:grid-cols-2 sm:rounded-[1.2rem] sm:~gap-x-12/[5.31rem] sm:~pl-7/[2.69rem] xl:rounded-[1.375rem]'>
            <Card
              img={globe}
              heading='Exceptional Customer Service'
              className='sm:~pt-4/[1.44rem]'
            >
              We prioritize customer satisfaction by offering friendly,
              professional service. Our team is dedicated to making your moving
              experience as stress-free as possible
            </Card>
            <Card img={pricing} heading='Competitive Pricing' className=''>
              We offer competitive rates for our services without compromising
              on quality. Get a high-value service at a price that fits your
              budget.
            </Card>
            <Card img={tracking} heading='GPS Tracking' hr='sm:hidden'>
              We provide real-time tracking of your belongings, giving you peace
              of mind during the moving process.
            </Card>

            <Card
              img={services}
              heading='Comprehensive Services'
              className='sm:-mt-8'
              hr='hidden'
            >
              In addition to moving, we provide cleaning services to ensure your
              new space is spotless and ready for you to move in
            </Card>
            <div className='absolute left-[51%] hidden w-[0.5px] bg-black ~top-[2.47rem]/[2.83rem] ~bottom-[3.65rem]/[4.17rem] sm:block' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
