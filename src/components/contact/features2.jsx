import { Button } from "@components/common"
const Features2 = () => {
    return (
        <section className="container relative m-auto my-16 px-4 py-10 md:px-14">
            <div className="mb-12 text-center">
                <p className="font-fontOpen text-[1.375rem] text-base font-bold text-palletteColor14">
                    CALL US TODAY :{" "}
                    <span className="text-palletteColor1">222-222-2222</span>
                </p>
                <h1 className="font-fontOpen text-heading2 font-bold text-palletteColor9">
                    Looking for more about us?
                </h1>
                <p className="font-fontOpen text-palletteColor5">
                    Join us on social media to keep up with the latest news,
                    advice, and information from the best app for field service
                    businesses.
                </p>
            </div>

            <div className="mt-6 grid gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-16">
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1984BC] text-white shadow-lg md:h-14 md:w-14 md:rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="#FFF"
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            ></path>
                        </svg>
                    </div>

                    <p className="mb-2 text-center font-fontOpen text-palletteColor5">
                        On LinkedIn you can find official news about new
                        products, announcements, and career opportunities at
                        Housecall Pro.
                    </p>
                    <a href="#">
                        <Button variant="secondary">Learn More {">"}</Button>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B5998] text-white shadow-lg md:h-14 md:w-14 md:rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="#FFF"
                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                            ></path>
                        </svg>
                    </div>

                    <p className="mb-2 text-center font-fontOpen text-palletteColor5">
                        Give us a like and follow on Facebook to keep up to date
                        with the newest resources on how to grow your company.
                    </p>

                    <a href="#">
                        <Button variant="secondary">Learn More {">"}</Button>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#262626] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="#FFF"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                        </svg>
                    </div>

                    <p className="mb-2 text-center font-fontOpen text-palletteColor5">
                        Follow our IG to hear about new webinars and podcasts,
                        and to get inspired by Pros doing the work.
                    </p>

                    <a href="#">
                        <Button variant="secondary">Learn More {">"}</Button>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#CD201F] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 576 512"
                        >
                            <path
                                fill="#FFF"
                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                            ></path>
                        </svg>
                    </div>

                    <p className="mb-2 text-center font-fontOpen text-palletteColor5">
                        Subscribe to our YouTube channel to get advice and quick
                        tips on how to run your field service business.
                    </p>

                    <a href="#">
                        <Button variant="secondary">Learn More {">"}</Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Features2
