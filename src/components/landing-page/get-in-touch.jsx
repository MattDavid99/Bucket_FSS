const GetInTouch = () => {
    return (
        <section className="relative mt-28 h-fit bg-palletteColor10 py-14 md:py-16">
            <div className="text-center">
                <p className="font-fontOpen text-[1.375rem] font-semibold text-palletteColor14">
                    GET IN TOUCH:{" "}
                    <span className="text-palletteColor1">222-222-2222</span>
                </p>
                <h2 className="font-fontOpen text-[1.563rem] font-bold text-[#31343A]">
                    Revolutionize how work is done with Buckets
                </h2>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-20 px-12 font-fontOpen sm:flex-row md:flex-row lg:gap-44">
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-base text-[#373940]">
                    <img
                        src="/landing-page/increase-1.png"
                        className="m-auto size-20 transform transition-transform duration-300 hover:scale-x-[-1]"
                        alt="Increase Sales"
                    />
                    <h4>Drive Sales</h4>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-base text-[#373940]">
                    <img
                        src="/landing-page/work-1.png"
                        className="m-auto size-20 transform transition-transform duration-300 hover:scale-x-[-1]"
                        alt="Complete Jobs"
                    />
                    <h4>Complete Jobs</h4>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-base text-[#373940]">
                    <img
                        src="/landing-page/assets-1.png"
                        className="size-20 transform transition-transform duration-300 hover:scale-x-[-1]"
                        alt="Manage Assets"
                    />

                    <h4>Manage Money</h4>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-base text-[#373940]">
                    <img
                        src="/landing-page/analysis-1.png"
                        className="size-20 transform transition-transform duration-300 hover:scale-x-[-1]"
                        alt="Analysis"
                    />
                    <h4>Know Your Buisness</h4>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-base text-[#373940]">
                    <img
                        src="/landing-page/solutions-1.png"
                        className="size-20 transform transition-transform duration-300 hover:scale-x-[-1]"
                        alt="Solutions"
                    />
                    <h4>Innovate Solutions</h4>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch
