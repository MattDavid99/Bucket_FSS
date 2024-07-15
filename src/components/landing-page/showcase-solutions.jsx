const grdiSolutions = [
    {
        icon: "/landing-page/agreement.png",
        text: "Agreements",
    },
    {
        icon: "/landing-page/dispatching.png",
        text: "Dispatching",
    },
    {
        icon: "/landing-page/reporting.png",
        text: "Reporting",
    },
    {
        icon: "/landing-page/mobile.png",
        text: "Mobile",
    },
    {
        icon: "/landing-page/quickbooks.png",
        text: "Quickbooks",
    },
    {
        icon: "/landing-page/financing.png",
        text: "Financing",
    },
    {
        icon: "/landing-page/scheduling.png",
        text: "Scheduling",
    },
    {
        icon: "/landing-page/marketing.png",
        text: "Marketing",
    },
    {
        icon: "/landing-page/payments.png",
        text: "Payments",
    },
    {
        icon: "/landing-page/payroll.png",
        text: "Payroll",
    },
    {
        icon: "/landing-page/job-costing.png",
        text: "Job Costing",
    },
    {
        icon: "/landing-page/call-booking.png",
        text: "Call Booking",
    },
]
const ShowCaseSolutions = () => {
    return (
        <section className="container relative m-auto mt-12 grid grid-cols-1 grid-rows-1 gap-6 px-4 py-10 md:px-14 lg:grid-cols-2 lg:px-4 lg:py-8">
            <div>
                <h1 className="font-fontOpen text-heading1 font-bold text-palletteColor9">
                    Everything you need, all in one place
                </h1>
                <p className="mt-4 font-fontRoboto text-base text-palletteColor6">
                    Our all-in-one solution means you no longer have to sign
                    into multiple platforms. Everything you need to run your
                    business is in one convenient location, wherever you are.
                </p>
                <p className="mt-4 font-fontRoboto text-base text-palletteColor6">
                    Our all-in-one solution means you no longer have to sign
                    into multiple platforms.
                </p>
                <ul className="mt-4 space-y-2 font-fontOpen text-base text-palletteColor5 lg:mt-6 lg:space-y-3">
                    <li className="flex items-center gap-2">
                        <svg
                            className="size-4"
                            style={{ fill: "#008CFF" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        Stay in touch with your customers
                    </li>
                    <li className="flex items-center gap-2">
                        <svg
                            className="size-4"
                            style={{ fill: "#008CFF" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        Build and send estimates with a single text
                    </li>
                    <li className="flex items-center gap-2">
                        <svg
                            className="size-4"
                            style={{ fill: "#008CFF" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        Schedule more efficiently
                    </li>
                    <li className="flex items-center gap-2">
                        <svg
                            className="size-4"
                            style={{ fill: "#008CFF" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        Send invoices faster
                    </li>
                    <li className="flex items-center gap-2">
                        <svg
                            className="size-4"
                            style={{ fill: "#008CFF" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        Keep your technicians on schedule
                    </li>
                </ul>
                <button className="mt-4 transform font-fontOpen text-heading6 font-semibold text-palletteColor1 transition duration-500 hover:scale-125 hover:text-palletteColor5 lg:mt-5">
                    {" "}
                    Learn More {">"}
                </button>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 justify-self-center md:grid-cols-4 md:justify-items-center md:gap-3">
                {grdiSolutions.map((solution, index) => (
                    <div
                        key={index}
                        className="relative flex size-[7.1rem] items-center justify-center bg-[#6C6C6C] transition duration-200 hover:bg-palletteColor5 md:size-[9.375rem]"
                    >
                        <img src={solution.icon} alt="Agreement Icon" />
                        <div className="absolute font-fontOpen text-base font-bold text-white">
                            {solution.text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ShowCaseSolutions
