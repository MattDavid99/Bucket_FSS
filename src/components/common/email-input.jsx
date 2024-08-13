/* eslint-disable react/prop-types */
const EmailInput = ({ className }) => {
  return (
    <form className={className}>
      <div className="relative flex justify-center md:justify-start">
        <div class=" p-3 flex justify-center items-center">
          <div>
            <div class="relative bg-palletteColor10 h-12">
              <input
                type="text"
                id="username"
                name="username"
                class="peer bg-transparent h-full items-center flex sm:w-72 rounded-l-full text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Enter your email"
              />
              <label
                for="username"
                class="absolute cursor-text left-2 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                Enter your email
              </label>
            </div>
          </div>
          <button className="rounded-r-full h-[52px] bg-[#008CFF] font-fontOpen border-2 px-1 border-[#008CFF] text-base font-medium text-white md:p-2 md:px-5 md:text-[1.063rem]">
            START FREE TRIAL
          </button>
        </div>
      </div>
    </form>
  );
};
export default EmailInput;
