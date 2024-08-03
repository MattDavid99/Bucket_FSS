import { EmailInput } from '@components/common';

const GetInTouch2 = () => {
  return (
    <div className="relative mt-4 h-fit bg-palletteColor10 px-14 py-28 block overflow-hidden">
      <div className="absolute inset-0 bottom-28 flex items-center justify-center">
        <img className="opacity-20 max-w-full h-64" src="/cartoon/3d-rocket.gif" />
      </div>

      <div className="relative flex flex-col items-center justify-center ">
        <p className="font-Open text-center text-[1.375rem] font-semibold text-[#666666] md:text-left">
          GET IN TOUCH: <span className="text-palletteColor1">222-222-2222</span>
        </p>
        <h2 className="mb-4 text-center font-fontOpen text-[2.18rem] font-bold text-palletteColor9 md:text-left">Grow your business now</h2>
        <EmailInput className="" />
      </div>
    </div>
  );
};

export default GetInTouch2;
