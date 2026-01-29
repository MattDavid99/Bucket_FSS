/* eslint-disable react/prop-types */
const EmailInput = ({ className }) => {
  return (
    <form className={className}>
      <div className="relative flex justify-center xl:justify-start">
        <div className="flex items-center bg-white rounded-full shadow-soft p-1.5 border border-slate-200
                        hover:shadow-hover transition-shadow duration-300">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="h-12 w-48 sm:w-64 md:w-72 px-5 bg-transparent
                         text-textPrimary placeholder-textMuted
                         focus:outline-none font-fontInter text-base"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="h-12 px-6 md:px-8 bg-accent hover:bg-accentHover
                       rounded-full font-fontInter text-sm md:text-base font-bold text-white
                       flex items-center justify-center gap-2
                       transform hover:-translate-y-0.5 hover:shadow-lg
                       transition-all duration-300 btn-shine">
            <span className="hidden sm:inline">START FREE TRIAL</span>
            <span className="sm:hidden">START</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
