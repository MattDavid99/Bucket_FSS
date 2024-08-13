import { EmailInput } from "@components/common"
const GetInTouch = () => {
    return (
        <div className="relative mt-4 h-fit overflow-hidden bg-palletteColor10 px-14 py-28">
            <div className="container mx-auto">
                <img
                    className="absolute z-0 -translate-x-14 -translate-y-14 md:-translate-y-96 md:translate-x-44 lg:translate-x-72 lg:scale-150"
                    src="/buckets-pro/bg.png"
                    alt=""
                />
                <div className="flex flex-col items-center justify-center">
                    <p className="font-Open text-center text-[1.375rem] font-semibold text-[#666666] md:text-left">
                        GET IN TOUCH:{" "}
                        <span className="text-palletteColor1">
                            222-222-2222
                        </span>
                    </p>
                    <h2 className="mb-4 text-center font-fontOpen text-[2.18rem] font-bold text-palletteColor9 md:text-left">
                        Grow your business now
                    </h2>
                    <p className="mb-4 font-fontOpen font-fontbase text-palletteColor5">
                        Buckets has your back every step of the way. Take the
                        next step for your home cleaning business!
                    </p>
                    <EmailInput />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
