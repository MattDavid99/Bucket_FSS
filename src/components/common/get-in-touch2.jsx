import { EmailInput } from "@components/common"
const GetInTouch2 = () => {
    return (
        <div className="relative mt-4 h-fit bg-palletteColor10 px-14 py-28">
            <div className="flex flex-col items-center justify-center">
                <p className="font-Open text-center text-[1.375rem] font-semibold text-[#666666] md:text-left">
                    GET IN TOUCH:{" "}
                    <span className="text-palletteColor1">222-222-2222</span>
                </p>
                <h2 className="mb-4 text-center font-fontOpen text-[2.18rem] font-bold text-palletteColor9 md:text-left">
                    Grow your business now
                </h2>
                <EmailInput className="" />
            </div>
        </div>
    )
}

export default GetInTouch2
