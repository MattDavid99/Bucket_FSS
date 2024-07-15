import { FooterMenu } from "./footer-items"
const Footer = () => {
    return (
        <footer className="w-full bg-palletteColor4 pt-8">
            <div className="container mx-auto w-full">
                <div className="flex flex-col items-center justify-center gap-7 border-b border-[#6C6C70] pb-12 lg:flex-row lg:justify-between lg:gap-0">
                    <a
                        href="/"
                        className="flex justify-center lg:justify-start"
                    >
                        <img
                            src="/footer/1.png"
                            alt="logo of buckets"
                            className="w-40"
                        />
                    </a>
                    <div className="flex gap-3">
                        <a href="facebook">
                            <svg
                                width="15px"
                                height="15px"
                                className="fill-palletteColor8 transition-all duration-300 ease-in-out hover:fill-white"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
                            </svg>
                        </a>

                        <a href="facebook">
                            <svg
                                width="15px"
                                className="fill-palletteColor8 transition-all duration-300 ease-in-out hover:fill-white"
                                height="15px"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M2.9 0C1.3 0 0 1.3 0 2.9v14.3C0 18.7 1.3 20 2.9 20h14.3c1.6 0 2.9-1.3 2.9-2.9V2.9C20 1.3 18.7 0 17.1 0H2.9zm13.2 3.8L11.5 9l5.5 7.2h-4.3l-3.3-4.4-3.8 4.4H3.4l5-5.7-5.3-6.7h4.4l3 4 3.5-4h2.1zM14.4 15 6.8 5H5.6l7.7 10h1.1z"></path>
                            </svg>
                        </a>

                        <a href="facebook">
                            <svg
                                width="15"
                                height="15"
                                className="fill-palletteColor8 transition-all duration-300 ease-in-out hover:fill-white"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <circle cx="10" cy="10" r="3.3"></circle>
                                <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-8 py-8 min-[500px]:gap-16 min-[500px]:py-14 lg:flex-row lg:gap-0">
                    <div className="flex flex-col items-center gap-8 max-lg:justify-center min-[500px]:flex-row min-[500px]:items-start sm:gap-12 md:px-4 xl:gap-24">
                        {FooterMenu.map((menu, index) => (
                            <div key={index} className="block">
                                <h4 className="mb-4 text-center font-fontOpen text-base text-[#FFFFFF66] min-[500px]:text-left">
                                    {menu.title}
                                </h4>
                                <ul className="grid gap-0 text-center font-fontOpen text-14 min-[500px]:gap-1 min-[500px]:text-left">
                                    {menu.links.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.link}
                                                className="text-white hover:text-palletteColor1"
                                            >
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="block w-64">
                            <h4 className="mb-4 text-center font-fontOpen text-base text-[#FFFFFF66] min-[500px]:text-left">
                                Contact Us
                            </h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center rounded-[0.8rem] bg-[#3E3E47] p-1 font-fontOpen">
                                    <div className="p-2">
                                        <img
                                            className="size-5"
                                            src="/footer/Calling.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-l border-gray-500">
                                        <div className="ml-2">
                                            <p className="text-[0.625rem] text-[#FFFFFF66]">
                                                Phone
                                            </p>
                                            <p className="text-[0.75rem] text-white">
                                                (222)222-2222
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center rounded-[0.8rem] bg-[#3E3E47] p-1 font-fontOpen">
                                    <div className="p-2">
                                        <img
                                            className="size-5"
                                            src="/footer/Message.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-l border-gray-500">
                                        <div className="ml-2">
                                            <p className="text-[0.625rem] text-[#FFFFFF66]">
                                                Email
                                            </p>
                                            <p className="text-[0.75rem] text-white">
                                                support@buckets.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#24242B]">
                <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-2 sm:px-6 lg:flex-row lg:justify-between lg:gap-0 lg:px-12">
                    <span className="font-fontInter text-sm text-white">
                        ©<a href="/">2024</a> All rights reserved by Buckets
                    </span>
                    <div className="mt-4 flex space-x-4 text-white sm:mt-0 sm:justify-center">
                        <a href="#">
                            <span className="font-fontOpen underline hover:text-gray-500">
                                Terms of Use
                            </span>
                        </a>
                        <a href="#">
                            <span className="font-fontOpen underline hover:text-gray-500">
                                Privacy Policy
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
