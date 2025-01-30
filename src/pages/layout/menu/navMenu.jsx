import React, { useState, useEffect } from 'react';
import NavMenuColapsable from './navMenu-colapsable';
import NavMenuMobile from './navMenu-mobile';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavMenu = () => {

  const [toggleMobile, setToggleMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 w-full px-7 py-3 z-1002 font-fontbase transition-all duration-300 md:fixed md:px-[5rem] ${
        isSticky ? 'fixed left-0 right-0 top-0 bg-[#2d2c34] text-white z-1002' : 'bg-inherit bg-white'
      } `}>
      <div className="container mr-auto">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex justify-between lg:flex-row">
          <a href="/" className="flex w-36 items-center">
              <img
                src={isSticky ? '/header/Best-White-Check.png' : '/header/Best-Green.png'}
                alt="Logo"
                className="transition-opacity duration-300"
                style={{ opacity: 1 }}
              />
            </a>
            <motion.div
            initial={{ translateX: 0 ,zIndex: 1000 ,rotate: "180deg"}}
            animate={{ translateX: !toggleMobile ? "0" : "90px" ,rotate: toggleMobile ? "0" : "180deg"}}
            // transition={{ duration: 0.5 }}

            >

            <button
              data-collapse-toggle="megamenu-cta"
              type="button"
              className="mobile-button ml-3 inline-flex items-center rounded-lg p-1 text-sm text-gray-500   "
              aria-controls="navbar"
              aria-expanded="false"
              onClick={() => setToggleMobile(!toggleMobile)}>
              <span className="sr-only">Open main menu</span>
              <img
                src={ !isSticky ? '/header/icons8-login-50.png' : '/header/icons8-login-50-white.png'}
                alt="Logo"
                className="transition-opacity duration-300"
                style={{ opacity: 1, width: "40px", height: "40px" }}
              />
            </button>
            </motion.div>
            <div className="hidden lg:block">
              <NavMenuColapsable toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} />
            </div>
            {/* sasas */}
            <div className="block lg:hidden">
              <NavMenuMobile toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} />
            </div>
          </div>
          <div className="ml-auto flex flex-col justify-center gap-y-4 lg:flex-row lg:items-center">
              <NavLink to="/pricing">
                <button className="shadow-xs cursor-pointer rounded-[2.5rem] bg-[#82ce51] px-[2.12rem] py-3 text-center text-sm font-bold text-white transition-all duration-500 hover:bg-[##88A444] hover:text-black">
                  {' '}
                  TRY IF FOR FREE{' '}
                </button>
              </NavLink>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
