/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Accordion, AccordionItem as Item, ControlledAccordion, useAccordionProvider } from '@szhsin/react-accordion';
import { MenuItems } from './menu-items';
import chevron from '/faq/chevron-down.svg';
import { NavLink } from 'react-router-dom';
import { Button } from '@components/common';

const AccordionItem = ({ header, link, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <NavLink
          to={link}
          className="flex w-72 font-fontOpen text-base font-semibold text-black hover:text-palletteColor1 group"
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#82ce51',
                }
              : {}
          }
          onClick={(e) => {
            e.preventDefault();
          }}>
          {({ isActive }) => (
            <>
              {header}
              <img
                className={`ml-auto transition-transform duration-200 ease-out ${isEnter ? 'rotate-180' : '-rotate-90'}`}
                style={{
                  filter:
                    isActive || isEnter
                      ? 'invert(67%) sepia(29%) saturate(1122%) hue-rotate(54deg) brightness(100%) contrast(88%)'
                      : 'none',
                }}
                src={chevron}
                alt="Chevron"
              />
            </>
          )}
        </NavLink>
      </>
    )}
    className=""
    buttonProps={{
      className: () =>
        `flex w-full p-4 text-left bg-slate-200"
        }`,
    }}
    contentProps={{
      className: 'transition-height duration-300 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
);

const AccordionsubItem = ({ header, isActive, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className="flex items-center font-fontOpen text-base hover:text-palletteColor1 group" style={{ textTransform: 'uppercase' }}>
          {header}
          <img
            className={`ml-auto mr-4 transition-transform duration-200 ease-out ${isEnter ? 'rotate-180' : '-rotate-90'}`}
            style={{
              filter:
                isActive || isEnter ? 'invert(67%) sepia(29%) saturate(1122%) hue-rotate(54deg) brightness(100%) contrast(88%)' : 'none',
            }}
            src={chevron}
            alt="Chevron"
          />
        </div>
      </>
    )}
    className=""
    buttonProps={{
      className: () =>
        `flex w-full p-4 text-left bg-slate-200"
        }`,
    }}
    contentProps={{
      className: 'transition-height duration-300 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
);

const NavMenuColapsable = ({ toggleMobile, setToggleMobile }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  useEffect(() => {
    if (!toggleMobile) {
      setActiveCategory(null);
      setActiveSubCategory(null);
    }
  }, [toggleMobile]);

  return (
    <motion.aside
      className={`sidebar-transition w-full left-0 fixed z-50 h-screen bg-white shadow-lg  md:w-[300px]`}
      initial={false}
      animate={{
        x: toggleMobile ? 0 : '-100%',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <img src="/header/Best-Green.png" alt="Logo" className="h-8 lg:h-14" />
        {/* Show close button only on mobile */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setToggleMobile(false);
          }}
          className="rounded text-black p-2 hover:bg-gray-100 hover:text-red-500"
          aria-label="Close menu">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="h-[calc(100vh-64px)] overflow-y-auto text-black">
        <div className="p-4">
          {MenuItems.map((category, index) => (
            <div key={index} className="mb-4">
              {category.items ? (
                // Links with dropdowns
                <>
                  <button
                    onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors
                      ${activeCategory === category.title ? 'bg-gray-50 text-palletteColor1' : 'hover:bg-gray-50 hover:text-palletteColor1'}`}>
                    <span className="font-semibold">{category.title}</span>
                    <svg
                      className={`h-5 w-5 transition-transform ${activeCategory === category.title ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>

                  {activeCategory === category.title && (
                    <div className="mt-2 space-y-2 pl-4">
                      {category.items.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                          <button
                            onClick={() => setActiveSubCategory(activeSubCategory === subcategory.title ? null : subcategory.title)}
                            className={`flex w-full items-center justify-between rounded-md p-2 text-left text-sm transition-colors
                              ${activeSubCategory === subcategory.title ? 'text-palletteColor1' : 'text-gray-600 hover:bg-gray-50 hover:text-palletteColor1'}`}>
                            <span className="font-medium">{subcategory.title}</span>
                            {subcategory.subItems && (
                              <svg
                                className={`h-4 w-4 transition-transform ${activeSubCategory === subcategory.title ? 'rotate-180' : ''}`}
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                              </svg>
                            )}
                          </button>

                          {activeSubCategory === subcategory.title && subcategory.subItems && (
                            <div className="ml-4 mt-2 space-y-2">
                              {subcategory.subItems.map((item, itemIndex) => (
                                <NavLink
                                  key={itemIndex}
                                  to={item.link}
                                  onClick={() => setToggleMobile(false)}
                                  className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-md p-2 text-sm transition-colors group
                                ${isActive ? 'text-palletteColor1' : 'text-black hover:bg-gray-50 hover:text-palletteColor1'}`
                                  }>
                                  {({ isActive }) => (
                                    <>
                                      {item.icon && (
                                        <img
                                          src={item.icon}
                                          alt=""
                                          className="h-5 w-5 transition-all duration-200"
                                          style={{
                                            filter: isActive
                                              ? 'invert(67%) sepia(29%) saturate(1122%) hue-rotate(54deg) brightness(100%) contrast(88%)'
                                              : 'none',
                                          }}
                                        />
                                      )}
                                      <span>{item.title}</span>
                                    </>
                                  )}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // Simple links without dropdowns
                <NavLink
                  to={category.link}
                  onClick={() => setToggleMobile(false)}
                  className={({ isActive }) =>
                    `block rounded-lg p-3 text-base font-medium transition-colors
                    ${isActive ? 'bg-gray-50 text-palletteColor1' : 'text-gray-700 hover:bg-gray-50 hover:text-palletteColor1'}`
                  }>
                  {category.title}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full border-t bg-white p-4">
        <NavLink to="/pricing" onClick={() => setToggleMobile(false)} className="block w-full">
          <button className="w-full rounded-full bg-palletteColor1 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-opacity-90 hover:text-black duration-300 ease-out">
            TRY IT FOR FREE
          </button>
        </NavLink>
      </div>
    </motion.aside>
  );
};

export default NavMenuColapsable;
