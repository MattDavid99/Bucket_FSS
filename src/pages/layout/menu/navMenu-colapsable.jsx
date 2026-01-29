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
      className={`sidebar-transition w-full left-0 top-0 fixed z-50 h-screen bg-white shadow-hover md:w-[320px]`}
      initial={false}
      animate={{
        x: toggleMobile ? 0 : '-100%',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <img src="/header/AAA-MAIN.png" alt="Logo" className="h-10" />
        <button
          onClick={(e) => {
            e.preventDefault();
            setToggleMobile(false);
          }}
          className="rounded-lg text-textSecondary p-2 hover:bg-slate-100 hover:text-primary-950
                     transition-colors duration-200 flex items-center justify-center"
          aria-label="Close menu">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="h-[calc(100vh-140px)] overflow-y-auto text-primary-950">
        <div className="p-5">
          {MenuItems.map((category, index) => (
            <div key={index} className="mb-3">
              {category.items ? (
                // Links with dropdowns
                <>
                  <button
                    onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                    className={`flex w-full items-center justify-between rounded-xl p-3 text-left transition-all duration-200
                      ${activeCategory === category.title
                        ? 'bg-accent/10 text-accent'
                        : 'hover:bg-slate-50 text-primary-950'}`}>
                    <span className="font-fontInter font-semibold">{category.title}</span>
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${activeCategory === category.title ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>

                  {activeCategory === category.title && (
                    <div className="mt-2 space-y-1 pl-4">
                      {category.items.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                          <button
                            onClick={() => setActiveSubCategory(activeSubCategory === subcategory.title ? null : subcategory.title)}
                            className={`flex w-full items-center justify-between rounded-lg p-2.5 text-left text-sm transition-colors
                              ${activeSubCategory === subcategory.title
                                ? 'text-accent'
                                : 'text-textSecondary hover:bg-slate-50 hover:text-accent'}`}>
                            <span className="font-fontInter font-medium">{subcategory.title}</span>
                            {subcategory.subItems && (
                              <svg
                                className={`h-4 w-4 transition-transform duration-200 ${activeSubCategory === subcategory.title ? 'rotate-180' : ''}`}
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                              </svg>
                            )}
                          </button>

                          {activeSubCategory === subcategory.title && subcategory.subItems && (
                            <div className="ml-4 mt-1 space-y-1">
                              {subcategory.subItems.map((item, itemIndex) => (
                                <NavLink
                                  key={itemIndex}
                                  to={item.link}
                                  onClick={() => setToggleMobile(false)}
                                  className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg p-2.5 text-sm transition-colors
                                     ${isActive ? 'text-accent bg-accent/5' : 'text-textSecondary hover:bg-slate-50 hover:text-accent'}`
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
                                      <span className="font-fontInter">{item.title}</span>
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
                    `block rounded-xl p-3 font-fontInter text-base font-medium transition-all duration-200
                    ${isActive ? 'bg-accent/10 text-accent' : 'text-primary-950 hover:bg-slate-50 hover:text-accent'}`
                  }>
                  {category.title}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full border-t border-slate-100 bg-white p-5">
        <NavLink to="/pricing" onClick={() => setToggleMobile(false)} className="block w-full">
          <button className="w-full rounded-full bg-accent hover:bg-accentHover px-6 py-3.5
                           font-fontInter text-sm font-bold text-white
                           shadow-md hover:shadow-lg
                           transform hover:-translate-y-0.5
                           transition-all duration-300">
            TRY IT FOR FREE
          </button>
        </NavLink>
      </div>
    </motion.aside>
  );
};

export default NavMenuColapsable;
