import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MenuItems } from "./menu-items"
import NavMenuMobile from "./navMenu-mobile"
import { NavLink } from "react-router-dom"

const NavMenu = () => {
    const [isHovered, setIsHovered] = useState({
        industries: false,
        products: false,
    })
    const [toggleMobile, setToggleMobile] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            className={`z-50 w-full px-7 py-3 font-fontbase transition-all duration-300 md:fixed md:px-[5rem] ${
                isSticky
                    ? "fixed left-0 right-0 top-0 bg-black text-white"
                    : "bg-inherit bg-white"
            } `}
            style={{ fixed: isSticky ? "top-0" : "top-0" }}
        >
            <div className="container mx-auto">
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="flex justify-between lg:flex-row">
                        <a href="/" className="flex w-36 items-center">
                            {isSticky ? (
                                <img src="/header/5.png" alt="" />
                            ) : (
                                <img src="/header/4.png" alt="" />
                            )}
                        </a>
                        <button
                            data-collapse-toggle="megamenu-cta"
                            type="button"
                            className="mobile-button ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                            aria-controls="navbar"
                            aria-expanded="false"
                            onClick={() => setToggleMobile(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <NavMenuMobile
                            toggleMobile={toggleMobile}
                            setToggleMobile={setToggleMobile}
                        />
                    </div>
                    <div
                        className="hidden w-full lg:flex lg:pl-11"
                        id="megamenu-cta"
                    >
                        <ul className="my-4 flex flex-col gap-y-4 lg:my-0 lg:flex-row lg:items-center">
                            {MenuItems.map((menuItem, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer ${menuItem.items ? "" : "relative"}`}
                                >
                                    {!menuItem.items ? (
                                        <NavLink
                                            to={menuItem.link}
                                            className={() =>
                                                `flex items-center justify-between gap-x-2 text-14 font-semibold capitalize ${
                                                    isSticky
                                                        ? "text-white hover:text-palletteColor1"
                                                        : "text-palletteColor5 hover:text-palletteColor1"
                                                } mb-2 mr-auto text-center transition-all duration-500 lg:m-0 lg:mb-0 lg:mr-6 lg:text-left`
                                            }
                                            style={({ isActive }) =>
                                                isActive
                                                    ? {
                                                          color: "#008CFF",
                                                      }
                                                    : {}
                                            }
                                        >
                                            {menuItem.title}
                                        </NavLink>
                                    ) : (
                                        <NavLink
                                            to={menuItem.link}
                                            onMouseEnter={() =>
                                                setIsHovered({
                                                    [menuItem.title]: true,
                                                })
                                            }
                                            className={() =>
                                                `flex items-center justify-between gap-x-2 text-14 font-semibold capitalize ${
                                                    isSticky
                                                        ? "text-white hover:text-palletteColor1"
                                                        : "text-palletteColor5 hover:text-palletteColor1"
                                                } mb-2 mr-auto text-center transition-all duration-500 lg:m-0 lg:mb-0 lg:mr-6 lg:text-left`
                                            }
                                            style={({ isActive }) =>
                                                isActive
                                                    ? {
                                                          color: "#008CFF",
                                                      }
                                                    : {}
                                            }
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                            }}
                                        >
                                            {menuItem.title}
                                            {menuItem.items && (
                                                <svg
                                                    style={{
                                                        fill: "currentColor",
                                                    }}
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 15 15"
                                                >
                                                    <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>
                                                </svg>
                                            )}
                                            {isHovered[menuItem.title] &&
                                                menuItem.items && (
                                                    <AnimatePresence>
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                            }}
                                                            onMouseLeave={() =>
                                                                setIsHovered({
                                                                    [menuItem.title]: false,
                                                                })
                                                            }
                                                            className="dropdown-menu animate-fade md:py-2l container left-0 right-0 top-full z-10 m-auto h-auto w-screen rounded-lg bg-white p-4 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:px-5 lg:absolute lg:px-10 lg:py-4 xl:px-8 xl:py-8"
                                                        >
                                                            <div className="grid grid-cols-1 justify-between lg:grid-cols-3">
                                                                {menuItem.items.map(
                                                                    (
                                                                        subItem,
                                                                        subIndex,
                                                                    ) => (
                                                                        <ul
                                                                            key={
                                                                                subIndex
                                                                            }
                                                                            className="text-sm text-gray-700"
                                                                            aria-labelledby="dropdownLargeButton"
                                                                        >
                                                                            <h6 className="mb-2 text-sm font-medium text-gray-500">
                                                                                {
                                                                                    subItem.title
                                                                                }
                                                                            </h6>
                                                                            {subItem.subItems.map(
                                                                                (
                                                                                    item,
                                                                                    itemIndex,
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            itemIndex
                                                                                        }
                                                                                    >
                                                                                        <NavLink
                                                                                            to={
                                                                                                item.link
                                                                                            }
                                                                                            className="group flex items-center py-2 transition-all duration-500 hover:rounded-xl hover:text-palletteColor1"
                                                                                        >
                                                                                            {item.icon && (
                                                                                                <img
                                                                                                    src={
                                                                                                        item.icon
                                                                                                    }
                                                                                                    className="group-hover:filter-blue mr-2"
                                                                                                    alt={
                                                                                                        item.title
                                                                                                    }
                                                                                                />
                                                                                            )}
                                                                                            <div className="w-4/5">
                                                                                                <h5 className="mb-1.5 text-14 text-palletteColor5 group-hover:text-palletteColor1">
                                                                                                    {
                                                                                                        item.title
                                                                                                    }
                                                                                                </h5>
                                                                                            </div>
                                                                                        </NavLink>
                                                                                    </li>
                                                                                ),
                                                                            )}
                                                                        </ul>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                )}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="ml-auto flex flex-col justify-center gap-y-4 lg:flex-row lg:items-center">
                            <NavLink to="/pricing">
                                <button className="shadow-xs cursor-pointer rounded-[2.5rem] bg-[#008CFF] px-[2.12rem] py-3 text-center text-sm font-bold text-white transition-all duration-500 hover:bg-[#439eff] hover:text-black">
                                    {" "}
                                    TRY IF FOR FREE{" "}
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu
