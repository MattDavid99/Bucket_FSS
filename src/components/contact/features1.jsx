import { Button } from "@components/common"
const Features1 = () => {
    return (
        <section className="container relative m-auto mt-12 px-4 py-10 md:px-14">
            <div className="mb-4 text-center">
                <p className="text-base text-heading6 font-medium text-palletteColor5">
                    TRUSTED BY 40,000+ BUSINESSES
                </p>
                <h1 className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                    How can we help?
                </h1>
            </div>

            <div className="mt-14 grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1997FF] text-white shadow-lg md:h-14 md:w-14 md:rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="#FFF"
                                d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z"
                            ></path>
                        </svg>
                    </div>

                    <h3 className="mb-2 text-center font-fontOpen text-heading3 font-bold text-palletteColor9 md:text-heading3">
                        Sales
                    </h3>
                    <p className="mb-2 text-center font-fontOpen text-base text-palletteColor5">
                        Our knowledgeable sales team is here to answer your
                        questions. Learn more about boosting your business
                        today!
                    </p>
                    <Button variant="secondary"> Contact Sales {">"}</Button>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1997FF] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="#FFF"
                                d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
                            ></path>
                        </svg>
                    </div>

                    <h3 className="mb-2 text-center font-fontOpen text-heading3 font-bold text-palletteColor9 md:text-heading3">
                        Support
                    </h3>

                    <p className="mb-2 text-center font-fontOpen text-base text-palletteColor5">
                        Our team is always here to assist you with Buckets.
                        Please contact us anytime for a smooth experience.
                    </p>

                    <Button variant="secondary"> Learn More {">"}</Button>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1997FF] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 288 512"
                        >
                            <path
                                fill="#FFF"
                                d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                            ></path>
                        </svg>
                    </div>

                    <h3 className="mb-2 text-center font-fontOpen text-heading3 font-bold text-palletteColor9 md:text-heading3">
                        Pricing
                    </h3>

                    <p className="mb-2 text-center font-fontOpen text-base text-palletteColor5">
                        Affordable options for businesses of any size.
                        Customizable plans and flexible payments available.
                        Boost your business now!
                    </p>

                    <Button variant="secondary"> Learn More {">"}</Button>
                </div>
            </div>
        </section>
    )
}
export default Features1
