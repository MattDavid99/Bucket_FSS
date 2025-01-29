import React, { useState, useEffect } from 'react';
import NavMenuColapsable from './navMenu-colapsable';
import NavMenuMobile from './navMenu-mobile';

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
      <div className="container mx-auto">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex justify-between lg:flex-row">
            
            <button
              data-collapse-toggle="megamenu-cta"
              type="button"
              className="mobile-button ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar"
              aria-expanded="false"
              onClick={() => setToggleMobile(true)}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
            <div className="hidden lg:block">
              <NavMenuColapsable toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} />
            </div>
            {/* sasas */}
            <div className="block lg:hidden">
              <NavMenuMobile toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} />
            </div>
          </div>
  
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
