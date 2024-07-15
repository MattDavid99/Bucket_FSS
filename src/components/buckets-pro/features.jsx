import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const featuresDate = [
    {
        title: "Seamless Integration",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature1.svg",
        alt: "Seamless Integration Icon",
    },
    {
        title: "Easy To Use",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature2.svg",
        alt: "Easy To Use Icon",
    },
    {
        title: "Cross Compatibility",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature3.svg",
        alt: "Cross Compatibility Icon",
    },
    {
        title: "Scalable",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature4.svg",
        alt: "Scalable Icon",
    },
    {
        title: "Secure",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature5.svg",
        alt: "Secure Icon",
    },
    {
        title: "One Click Setup",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature6.svg",
        alt: "One Click Setup Icon",
    },
    {
        title: "Malware Protection",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature7.svg",
        alt: "Malware Protection Icon",
    },
    {
        title: "24/7 Technical Support",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature8.svg",
        alt: "24/7 Technical Support Icon",
    },
    {
        title: "Multiple Administrators",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam",
        icon: "/buckets-pro/feature9.svg",
        alt: "Multiple Administrators Icon",
    },
]

const Features = () => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref)
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div className="relative mt-4 h-fit px-14 py-24">
            <div ref={ref} className="mb-12 text-center">
                <h2 className="relative font-fontOpen text-[2.688rem] font-bold text-palletteColor9">
                    <span className="block text-center">Features</span>
                    <div className="absolute bottom-0 left-0 w-full translate-y-[10%] transform">
                        <svg
                            className="mx-auto h-auto w-[13rem]"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            viewBox="0 0 500 150"
                        >
                            <motion.path
                                animate={controls}
                                initial="hidden"
                                transition={{ duration: 1, ease: "easeInOut" }}
                                variants={{
                                    visible: { pathLength: 1 },
                                    hidden: { pathLength: 0 },
                                }}
                                fill="none"
                                stroke="#008CFF"
                                strokeWidth="9"
                                d="M7.7 145.6C109 125 299.9 116.2 401 121.3c42.1 2.2 87.6 11.8 87.3 25.7"
                            ></motion.path>
                        </svg>
                    </div>
                </h2>
                <p className="mt-2 font-fontOpen text-base text-palletteColor5">
                    Scale your service business with our suite of all in one
                    solution
                </p>
            </div>
            <div className="container mx-auto space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                {featuresDate.map((feature, index) => (
                    <div
                        key={index}
                        className="flex h-fit flex-col items-center gap-2 rounded-[0.625rem] p-6 shadow-md shadow-[#b6b6b6] md:flex-row"
                    >
                        <div className="flex h-fit w-full items-center justify-center rounded-[0.625rem] bg-palletteColor12 p-4 md:w-fit">
                            <img
                                className="size-10 transform duration-300 hover:scale-x-[-1]"
                                src={feature.icon}
                                alt={feature.alt}
                            />
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
