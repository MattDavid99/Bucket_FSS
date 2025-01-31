/* eslint-disable react/prop-types */
const EmailInput = ({ className }) => {
  return (
    <form className={className}>
      {/* <div className="relative flex justify-center md:justify-start"> */}
      <div className="relative flex justify-center">
        <div className=" p-3 flex justify-center items-center">
          <div>
            <div className="relative bg-palletteColor10 h-12">
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-transparent h-full items-center flex sm:w-72 rounded-l-full text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-lime-600 focus:outline-none focus:border-rose-600"
                placeholder="Enter your email"
              />
              <label
                htmlFor="username"
                className="absolute cursor-text left-2 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-lime-600 peer-focus:text-sm transition-all">
                Enter your email
              </label>
            </div>
          </div>
          <button className="rounded-r-full h-[52px] bg-[#82ce51] font-fontOpen border-2 px-1  border-[#82ce51] text-base font-medium text-white  md:p-2 md:text-[1.063rem] flex items-center justify-center">
            <span className="hidden md:inline">START FREE TRIAL</span>
            <svg className="w-6 h-6 md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};
export default EmailInput;
