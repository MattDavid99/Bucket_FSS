/* eslint-disable react/prop-types */
const EmailInput = ({ className }) => {
  return (
    <form className={className}>
      <div className="relative flex justify-center md:justify-start">
        <input
          type="email"
          className="h-[3.125rem] w-4/5 rounded-l-[1.563rem] border-b border-l border-t border-[#928F8F] ring-[#008CFF] focus:outline-none focus:ring-1 lg:w-[18rem] lg:pl-4"
          placeholder="Enter your email"
        />
        <button className="rounded-e-[1.563rem] bg-[#008CFF] font-fontOpen text-sm font-medium text-white md:p-2 md:px-5 md:text-[1.063rem]">
          START FREE TRIAL
        </button>
      </div>
    </form>
  );
};
export default EmailInput;
