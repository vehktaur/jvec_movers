import app_store from '../assets/app_store.svg';
import play_store from '../assets/play_store.svg';

const AppDownload = () => {
  return (
    <section className='padding-inline bg-app-download relative bg-cover bg-center bg-no-repeat pb-[4.19rem] pt-[3.81rem] sm:py-[2.62rem]'>
      <div className='absolute inset-0 z-0 bg-black bg-opacity-90' />
      <div className='relative z-[1] mx-auto max-w-7xl text-white'>
        <div className='flex w-full flex-col items-center gap-10 sm:flex-row sm:justify-between'>
          <h2 className='section-subheading'>Download The App</h2>

          <div className='flex flex-col items-center ~gap-6/20 sm:flex-row'>
            <a className='block ~max-w-40/[14.5rem]' href='#'>
              <img src={app_store} alt='Download on the app store' />
            </a>
            <a className='block ~max-w-40/[14.5rem]' href='#'>
              <img src={play_store} alt='Get it on play store' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDownload;
