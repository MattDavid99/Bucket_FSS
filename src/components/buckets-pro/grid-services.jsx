import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { Button } from "@components/common"
const GridServices = () => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref)
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div className="relative mt-4 h-fit bg-palletteColor10 px-14 py-24">
            <div className="mb-12 text-center">
                <h2 className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                    Automate. Integrate. Streamline.
                </h2>
                <p className="font-fontOpen text-base text-palletteColor5">
                    Our automated approach to operations helps you win more
                    business without more busy work.
                </p>

                <Button variant="secondary">Learn More {">"}</Button>
            </div>
            <div
                ref={ref}
                className="flex flex-col justify-center gap-4 md:items-center lg:flex-row"
            >
                <motion.div
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -100 },
                    }}
                    className="rounded-[0.625rem] bg-white p-6 shadow md:h-[26.188rem] md:w-[30rem]"
                >
                    <span className="font-fontRoboto text-heading5 text-gray-500">
                        01
                    </span>
                    <div className="mt-4 flex h-[9.899rem] w-auto items-center justify-center rounded-xl bg-[#C8D5DC36]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            className="m-auto"
                            viewBox="0 0 496 512"
                        >
                            <path
                                fill="#0068BD"
                                fillOpacity="0.65"
                                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h2 className="my-4 font-fontRoboto text-heading5 font-bold text-palletteColor9 transition-all duration-300 hover:-skew-x-12">
                            Create An Account
                        </h2>
                        <p className="font-fontOpen text-14 text-palletteColor5">
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam, Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -100 },
                    }}
                    className="rounded-[0.625rem] bg-white p-6 shadow md:h-[26.188rem] md:w-[30rem]"
                >
                    <span className="font-fontRoboto text-heading5 text-gray-500">
                        02
                    </span>
                    <div className="mt-4 flex h-[9.899rem] w-auto items-center justify-center rounded-xl bg-[#C8D5DC36]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            className="m-auto"
                            viewBox="0 0 496 512"
                        >
                            <path
                                fill="#0068BD"
                                fillOpacity="0.65"
                                d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h2 className="my-4 font-fontRoboto text-heading5 font-bold text-palletteColor9 transition-all duration-300 hover:-skew-x-12">
                            Connect Buckets
                        </h2>
                        <p className="font-fontOpen text-14 text-palletteColor5">
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam, Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -100 },
                    }}
                    className="rounded-[0.625rem] bg-white p-6 shadow md:h-[26.188rem] md:w-[30rem]"
                >
                    <span className="font-fontRoboto text-heading5 text-gray-500">
                        03
                    </span>
                    <div className="mt-4 flex h-[9.899rem] w-auto items-center justify-center rounded-xl bg-[#C8D5DC36]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            className="m-auto animate-bounce"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="#0068BD"
                                fillOpacity="0.65"
                                d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h2 className="my-4 font-fontRoboto text-heading5 font-bold text-palletteColor9 transition-all duration-300 hover:-skew-x-12">
                            Start Automating
                        </h2>
                        <p className="font-fontOpen text-14 text-palletteColor5">
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam, Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default GridServices
