import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div className="container m-auto h-full w-full overflow-hidden">
      <div className="mt-16 flex flex-col items-center justify-center gap-5 md:flex-row relative">
        {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#008CFF"
                        d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                    ></path>
                </svg> */}
        <div className="flex justify-center items-center gap-2 absolute -top-7">
          <img src="/cartoon/hold-certificate.png" alt="Cartoon Image" className="top-0 left-0 hidden h-[6rem] lg:block" />

          <h2 className="text-bold text-center font-fontOpen text-[1.625rem] text-palletteColor14">
            Chat With A Pro. Schedule An Easy-No Commitment Demo
          </h2>
        </div>
      </div>

      <InlineWidget
        styles={{
          height: '750px',
          minWidth: '320px',
          width: '100%',
          overflow: 'hidden',
        }}
        url="https://calendly.com/matthewdavid99/30min?preview_source=et_card&month=2024-07"
      />
    </div>
  );
};
export default Calendly;
