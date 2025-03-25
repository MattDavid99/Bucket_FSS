import { Button } from "@components/common"
import ReactPlayer from "react-player"
const CallUsNowSection = () => {
    return (
        <section className="w-full bg-palletteColor10">
            <div className="container relative m-auto grid grid-cols-1 grid-rows-1 gap-6 px-4 py-28 md:mt-12 md:grid-cols-2 md:px-10">
                <div className="md:py-24">
                    <p className="font-fontOpen text-heading6 text-palletteColor6">
                        CONTACT US
                    </p>
                    <h1 className="font-fontOpen text-heading1 font-bold text-palletteColor9">
                        We’re here to help
                    </h1>
                    <p className="mb-5 font-fontPoppins text-18 text-palletteColor5">
                        Contact us by phone or email us at support@myfieldservice.com
                    </p>
                    <Button>CALL US NOW</Button>
                </div>
                <div>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=29RG5ttBEJI"
                        width="100%"
                        height="100%"
                        className="min-h-[25.5rem]"
                        controls
                        playing
                        playIcon={
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="100"
                                    className=""
                                    fill="#fff"
                                    version="1.1"
                                    viewBox="0 0 60 60"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        className="shadow shadow-black"
                                        d="M45.563 29.174l-22-15A1 1 0 0022 15v30a.999.999 0 001.563.826l22-15a1 1 0 000-1.652zM24 43.107V16.893L43.225 30 24 43.107z"
                                    ></path>
                                    <path
                                        className="shadow shadow-black"
                                        d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"
                                    ></path>
                                </svg>
                            </button>
                        }
                        light="/commercial-cleaning-copy/pest.jpeg"
                    />
                </div>
            </div>
        </section>
    )
}
export default CallUsNowSection
