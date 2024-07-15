/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
    Accordion,
    AccordionItem as Item,
    ControlledAccordion,
    useAccordionProvider,
} from "@szhsin/react-accordion"
import { MenuItems } from "./menu-items"
import chevron from "/faq/chevron-down.svg"
import { NavLink } from "react-router-dom"
import { Button } from "@components/common"

const AccordionItem = ({ header, link, ...rest }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                <NavLink
                    to={link}
                    className="flex w-72 font-fontOpen text-base font-semibold text-black"
                    style={({ isActive }) =>
                        isActive
                            ? {
                                  color: "#008CFF",
                              }
                            : {}
                    }
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    {({ isActive }) => (
                        <>
                            {header}
                            <img
                                className={`ml-auto transition-transform duration-200 ease-out ${
                                    isEnter ? "rotate-180" : "-rotate-90"
                                }`}
                                style={{
                                    filter: isActive
                                        ? "invert(40%) sepia(52%) saturate(4000%) hue-rotate(190deg) brightness(100%) contrast(100%)"
                                        : "none",
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
            className: "transition-height duration-300 ease-out",
        }}
        panelProps={{ className: "p-4" }}
    />
)

const AccordionsubItem = ({ header, isActive, ...rest }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4"
                >
                    <motion.line
                        x1="4"
                        y1="12"
                        x2="20"
                        y2="12"
                        stroke="#D1D5DB"
                        strokeWidth="5"
                        strokeLinecap="round"
                        animate={{
                            stroke: isEnter ? "#008CFF" : "",
                        }}
                    />
                    <motion.circle
                        cx="4"
                        cy="12"
                        r="2"
                        fill="#D1D5DB"
                        animate={{
                            fill: isEnter ? "#008CFF" : "#D1D5DB",
                        }}
                        transition={{ duration: 0 }}
                    />
                </motion.svg>
                <div
                    className="font-fontOpen text-base"
                    style={{ textTransform: "uppercase" }}
                >
                    {header}
                </div>
                <img
                    className={`ml-auto mr-4 transition-transform duration-200 ease-out ${
                        isEnter ? "rotate-180" : "-rotate-90"
                    }`}
                    style={{
                        filter: isActive
                            ? "invert(40%) sepia(52%) saturate(4000%) hue-rotate(190deg) brightness(100%) contrast(100%)"
                            : "none",
                    }}
                    src={chevron}
                    alt="Chevron"
                />
            </>
        )}
        className=""
        buttonProps={{
            className: () =>
                `flex w-full p-4 text-left bg-slate-200"
        }`,
        }}
        contentProps={{
            className: "transition-height duration-300 ease-out",
        }}
        panelProps={{ className: "p-4" }}
    />
)

const NavMenuMobile = ({ toggleMobile, setToggleMobile }) => {
    const [isRotated, setIsRotated] = useState(false)
    const providerValue = useAccordionProvider({
        allowMultiple: false,
        transition: true,
        transitionTimeout: 200,
    })
    // Destructuring `toggle` and `toggleAll` from `providerValue`
    const { toggleAll } = providerValue

    useEffect(() => {
        if (toggleMobile) toggleAll(false)
    }, [toggleAll, toggleMobile])

    const handleClick = () => {
        setIsRotated(true)
        setToggleMobile(false)
    }

    return (
        <>
            <motion.div
                className="fixed inset-0 z-30 h-screen overflow-y-scroll overscroll-contain bg-white"
                initial={{ visibility: "hidden" }}
                animate={{ visibility: toggleMobile ? "visible" : "hidden" }}
                transition={{ duration: 0.2 }}
            />{" "}
            <motion.aside
                className="scrollbar fixed right-0 top-0 z-40 h-screen w-80 overflow-y-scroll overscroll-contain bg-white"
                initial={{
                    translateX: "100%",
                    boxShadow: "none",
                    visibility: "hidden",
                }}
                animate={{
                    translateX: toggleMobile ? "0" : "100%",
                    boxShadow: toggleMobile ? "0 0 20px 0 black" : "none",
                    visibility: toggleMobile ? "visible" : "hidden",
                }}
                transition={{ type: "tween", duration: 0.4 }}
            >
                <div className="z-40 flex p-4 text-black">
                    <span className="font-fontOpen text-heading6 font-semibold text-palletteColor5">
                        Menu
                    </span>
                    <button onClick={handleClick} className="ml-auto">
                        <motion.svg
                            animate={{
                                rotate: isRotated ? 180 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                type: "tween",
                            }}
                            initial="hidden"
                            width="12"
                            height="12"
                            viewBox="0 0 15 15"
                        >
                            <path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"></path>
                        </motion.svg>
                    </button>
                </div>

                <div className="mx-2 my-4 text-black">
                    {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
                    <ControlledAccordion providerValue={providerValue}>
                        {MenuItems.map((item, index) =>
                            item.items ? (
                                <AccordionItem
                                    key={index}
                                    header={item.title}
                                    link={item.link}
                                    className=" "
                                >
                                    <Accordion>
                                        {item.items.map((subitem, index) => (
                                            <AccordionsubItem
                                                key={index}
                                                header={subitem.title}
                                                link={subitem.link}
                                                className=""
                                            >
                                                {subitem.subItems
                                                    ? subitem.subItems.map(
                                                          (
                                                              subsubitem,
                                                              index,
                                                          ) => (
                                                              <NavLink
                                                                  key={index}
                                                                  to={
                                                                      subsubitem.link
                                                                  }
                                                                  onClick={() =>
                                                                      setToggleMobile(
                                                                          false,
                                                                      )
                                                                  }
                                                                  className="font-fontOpen"
                                                                  style={({
                                                                      isActive,
                                                                  }) => ({
                                                                      color: isActive
                                                                          ? "#008CFF"
                                                                          : "inherit",
                                                                  })}
                                                              >
                                                                  {({
                                                                      isActive,
                                                                  }) => (
                                                                      <div
                                                                          className="flex items-center space-y-2"
                                                                          style={{
                                                                              marginLeft:
                                                                                  "3rem",
                                                                          }}
                                                                      >
                                                                          <svg
                                                                              width="24"
                                                                              height="24"
                                                                              viewBox="0 0 24 24"
                                                                              fill="none"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              className="mr-4"
                                                                          >
                                                                              <motion.circle
                                                                                  cx="4"
                                                                                  cy="12"
                                                                                  r="2"
                                                                                  fill="#D1D5DB"
                                                                              />
                                                                          </svg>
                                                                          {subsubitem.icon && (
                                                                              <img
                                                                                  src={
                                                                                      subsubitem.icon
                                                                                  }
                                                                                  alt={
                                                                                      subsubitem.title
                                                                                  }
                                                                                  className="mr-2"
                                                                                  style={{
                                                                                      filter: isActive
                                                                                          ? "invert(40%) sepia(52%) saturate(4000%) hue-rotate(190deg) brightness(100%) contrast(100%)"
                                                                                          : "none",
                                                                                  }}
                                                                              />
                                                                          )}
                                                                          <div className="w-4/5">
                                                                              <h5 className="mb-1.5 font-fontOpen text-14">
                                                                                  {
                                                                                      subsubitem.title
                                                                                  }
                                                                              </h5>
                                                                          </div>
                                                                      </div>
                                                                  )}
                                                              </NavLink>
                                                          ),
                                                      )
                                                    : null}
                                            </AccordionsubItem>
                                        ))}
                                    </Accordion>
                                </AccordionItem>
                            ) : (
                                <NavLink
                                    to={item.link}
                                    className="my-6 ml-4 flex flex-col font-fontOpen text-base font-semibold text-black"
                                    style={({ isActive }) =>
                                        isActive
                                            ? {
                                                  color: "#008CFF",
                                              }
                                            : {}
                                    }
                                    onClick={() => setToggleMobile(false)}
                                    key={index}
                                >
                                    {item.title}
                                </NavLink>
                            ),
                        )}
                    </ControlledAccordion>
                </div>
                <NavLink
                    to="/pricing"
                    onClick={() => setToggleMobile(false)}
                    className="mt-6 flex justify-center"
                >
                    <Button>TRY IT FOR FREE</Button>
                </NavLink>
            </motion.aside>
        </>
    )
}

export default NavMenuMobile
