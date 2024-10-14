import { FacebookIcon, WhatsappIcon } from '@/assets/icons';

const Footer = () => {
  const residentialMovingLinks = [
    { label: 'Complete Packing', href: '#' },
    { label: 'Loading and Unloading', href: '#' },
    { label: 'Transportation', href: '#' },
    { label: 'Unpacking Services', href: '#' },
    { label: 'Commercial Moving', href: '#' },
    { label: 'Office and Business Relocations', href: '#' },
    { label: 'Packing and Transportation', href: '#' },
    { label: 'Setup Services', href: '#' },
  ];

  const specialtyMovesLinks = [
    { label: 'Delicate Items', href: '#' },
    { label: 'Heavy Furniture', href: '#' },
    { label: 'Art and Antiques', href: '#' },
    { label: 'Piano Moving', href: '#' },
    { label: 'Appliance Moving', href: '#' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'SiteMaps', href: '#' },
  ];

  return (
    <footer className='padding-inline bg-[#292D32] bg-footer bg-contain bg-bottom bg-no-repeat pt-[4.75rem] ~pb-[12.58rem]/[16.56rem] sm:pt-[4.13rem]'>
      <div className='mx-auto max-w-7xl text-center text-white sm:text-left'>
        <div className='grid justify-items-center gap-10 sm:grid-cols-3 lg:grid-cols-4'>
          <div className='~text-base/lg'>
            <div className='mx-auto mb-[0.44rem] w-[8.31rem] sm:mx-0'>
              <img className='w-full' src='/jvec_logo.svg' alt='logo' />
            </div>
            <p className='mb-[0.44rem]'>Copyright &copy; 2024</p>
            <p className='mx-auto max-w-[12.38rem] ~text-xs/lg sm:mx-0'>
              JVEC Movers. All Rights Reserved.
            </p>

            <p className='mx-auto max-w-[10.75rem] text-gray-steel ~mt-8/10 sm:mx-0'>
              Book Now - Schedule Your Move
            </p>

            <a
              href='#'
              className='mx-auto mt-4 block max-w-[10.75rem] bg-red-primary text-center font-medium text-white ~px-4/[2.4rem] ~py-[0.32rem]/[0.62rem] sm:mx-0'
            >
              Free Quote
            </a>
          </div>

          <div>
            <h2 className='footer-heading'>SERVICES</h2>

            <div>
              <h3 className='mb-3 font-medium text-gray-steel ~text-base/xl'>
                Residential Moving
              </h3>
              <ul className='space-y-3'>
                {residentialMovingLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className='block transition-colors duration-300 hover:text-red-300'
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-4'>
              <h3 className='mb-3 font-medium text-gray-steel ~text-base/xl'>
                Specialty Moves
              </h3>
              <ul className='space-y-3'>
                {specialtyMovesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className='block transition-colors duration-300 hover:text-red-300'
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className='footer-heading'>QUICK LINKS</h2>

            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className='block transition-colors duration-300 hover:text-red-300'
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='text-center sm:text-left'>
            <div>
              <h2 className='footer-heading'>CONTACT US</h2>
              <div className='space-y-[0.94rem] sm:space-y-3'>
                <address className='not-italic'>
                  12 Rev. Oguniyi Street, off Oba Akinjobi, ikeja GRA, Lagos,
                  Nigeria.
                </address>
                <p>
                  Phone:{' '}
                  <a
                    className='text-red-light hover:underline'
                    href='tel:08140979054'
                  >
                    +234-0814-097-9054
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    className='text-red-light hover:underline'
                    href='mailto:hello@jvecmovers.com'
                  >
                    hello@jvecmovers.com
                  </a>
                </p>
              </div>
            </div>

            <div className='~mt-10/14'>
              <h2 className='footer-heading'>FOLLOW US</h2>
              <p>
                Stay connected with us on social media for updates and
                promotions.
              </p>
              <p className='mt-3 flex items-center justify-center fill-white ~gap-8/12 sm:justify-start'>
                <a
                  className='flex items-center transition-colors duration-300 ~gap-1/2 hover:fill-red-300 hover:text-red-300'
                  href='#'
                >
                  <WhatsappIcon />
                  WhatsApp
                </a>

                <a
                  className='flex items-center transition-colors duration-300 ~gap-1/2 hover:fill-red-300 hover:text-red-300'
                  href='#'
                >
                  <FacebookIcon />
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;