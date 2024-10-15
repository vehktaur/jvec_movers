'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { ArrowDownIcon, HamburgerIcon } from '@/assets/icons';

const Navbar = () => {
  // State to manage the mobile menu open/closed status
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='padding-inline sticky top-0 z-10 bg-gray-slate ~pt-6/[1.92rem] ~pb-[1.37rem]/[1.99rem]'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center ~gap-7/14'>
            {/* Logo section */}
            <div className='~h-[2.3rem]/[2.59rem] ~w-[4.2rem]/[4.75rem]'>
              <img className='w-full' src='/jvec_logo.svg' alt='logo' />
            </div>

            <nav>
              {/* Desktop Nav Menu */}
              <div className={`hidden slg:block`}>
                <ul
                  className={`flex flex-row items-center gap-6 text-gray-neutral ~text-sm/lg`}
                >
                  <li className='group relative'>
                    <span className='absolute right-0 h-[5px] w-0 bg-red-primary transition-all duration-300 ~top-[2.3rem]/[3.9rem] group-hover:w-[70%]' />
                    <a
                      className='block transition duration-300 hover:text-white'
                      href='#'
                    >
                      Home
                    </a>
                  </li>
                  <li className='group relative'>
                    <span className='absolute right-0 h-[5px] w-0 bg-red-primary transition-all duration-300 ~top-[2.3rem]/[3.9rem] group-hover:w-[70%]' />
                    <a
                      className='block transition duration-300 hover:text-white'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                  <li className='group relative'>
                    <span className='absolute right-0 h-[5px] w-0 bg-red-primary transition-all duration-300 ~top-[2.3rem]/[3.9rem] group-hover:w-[70%]' />
                    <button
                      className='group flex items-center transition duration-300 hover:text-white'
                      href='#'
                    >
                      Services
                      <ArrowDownIcon className='transition duration-300 group-hover:rotate-180 group-hover:stroke-white' />
                    </button>
                  </li>
                  <li className='group relative'>
                    <span className='absolute right-0 h-[5px] w-0 bg-red-primary transition-all duration-300 ~top-[2.3rem]/[3.9rem] group-hover:w-[70%]' />
                    <button
                      className='group flex items-center transition duration-300 hover:text-white'
                      href='#'
                    >
                      More
                      <ArrowDownIcon className='transition duration-300 group-hover:rotate-180 group-hover:stroke-white' />
                    </button>
                  </li>
                  <li className='group relative'>
                    <span className='absolute right-0 h-[5px] w-0 bg-red-primary transition-all duration-300 ~top-[2.3rem]/[3.9rem] group-hover:w-[70%]' />
                    <a
                      className='block transition duration-300 hover:text-white'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Mobile Nav Menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -300, opacity: 0 }}
                    className={`${menuOpen ? 'absolute inset-x-0 top-full bg-gray-slate pb-8 pt-4' : ''} sm:px-12 slg:hidden`}
                  >
                    <ul
                      className={`flex flex-col items-center gap-6 text-gray-neutral ~text-base/lg sm:flex-row`}
                    >
                      <li>
                        <a
                          className='block transition duration-300 hover:text-white'
                          href='#'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className='block transition duration-300 hover:text-white'
                          href='#'
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <button
                          className='group flex items-center transition duration-300 hover:text-white'
                          href='#'
                        >
                          Services
                          <ArrowDownIcon className='transition duration-300 group-hover:stroke-white group-hover:[transform:rotateX(-180deg)]' />
                        </button>
                      </li>
                      <li>
                        <button
                          className='group flex items-center transition duration-300 hover:text-white'
                          href='#'
                        >
                          More
                          <ArrowDownIcon className='transition duration-300 group-hover:stroke-white group-hover:[transform:rotateX(-180deg)]' />
                        </button>
                      </li>
                      <li>
                        <a
                          className='block transition duration-300 hover:text-white'
                          href='#'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>

          <div className='flex items-center ~text-sm/lg ~gap-4/12'>
            {/* Contact number displayed on larger screens */}
            <a
              className='hidden items-center text-white ~gap-3/4 sm:flex'
              href='tel:08140979054'
            >
              <span>
                <Image src={assets.call} alt='call' />
              </span>
              <span className='underline'>0814-097-9054</span>
            </a>

            {/* Free Quote button */}
            <a
              href='#'
              className='block max-w-[10.75rem] bg-red-primary text-center font-medium text-white transition-all duration-300 ~px-4/[2.4rem] ~py-[0.32rem]/[0.62rem] hover:rounded-3xl hover:bg-red-700'
            >
              Free Quote
            </a>

            {/* Hamburger menu button for mobile view */}
            <button onClick={() => openMenu()} className='slg:hidden'>
              <HamburgerIcon menuOpen={menuOpen} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
