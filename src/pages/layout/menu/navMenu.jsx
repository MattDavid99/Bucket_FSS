import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavMenuColapsable from './navMenu-colapsable';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll lock
  useEffect(() => {
    if (toggleMobile && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggleMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 w-full px-7 py-3 font-fontbase transition-all duration-300 md:fixed md:px-[5rem] ${
        isSticky ? 'fixed left-0 right-0 top-0 bg-[#2d2c34] text-white' : 'bg-inherit bg-white'
      }`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex w-full flex-wrap gap-y-4">
          <div className="flex justify-between lg:flex-row">
            <a
              href="/"
              className={`flex w-36 items-center transition-opacity duration-300 ${toggleMobile ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Go to homepage">
              <img
                src={isSticky ? '/header/Best-White-Check.png' : '/header/Best-Green.png'}
                alt="Buckets Logo"
                width="144"
                height="40"
                className="transition-opacity duration-400"
              />
            </a>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ translateX: 0, opacity: 1 }}
              animate={{
                translateX: !toggleMobile ? '0' : '10px',
                opacity: toggleMobile ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`${toggleMobile ? 'pointer-events-none' : ''}`}>
              <button
                type="button"
                className={`mobile-button ml-3 inline-flex items-center rounded-lg p-2 text-sm hover:text-palletteColor1 ${
                  isSticky ? 'text-white' : 'text-gray-800'
                }`}
                onClick={() => setToggleMobile(!toggleMobile)}>
                <motion.div animate={{ rotate: toggleMobile ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.div>
              </button>
            </motion.div>

            {/* Navigation Menu */}
            <NavMenuColapsable toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} />
          </div>

          <div className="hidden sm:flex ml-auto flex flex-col justify-center gap-y-4 lg:flex-row lg:items-center">
            <NavLink to="/pricing">
              <button
                className="shadow-xs cursor-pointer rounded-[2.5rem] bg-[#82ce51] px-[2.12rem] py-3 text-center text-sm font-bold text-white transition-all duration-500 hover:bg-[##88A444] hover:text-black"
                aria-label="Try it for free">
                TRY IT FOR FREE
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
