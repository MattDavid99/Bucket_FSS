import { EmailInput } from '@components/common';

const GetInTouch2 = () => {
  return (
    <div className="py-8 lg:py-28 bg-palletteColor10">
      <div className="relative mt-4 h-fit  px-4 lg:px-14  block overflow-hidden">
        <div className="relative flex flex-col items-center justify-center md:justify-start">
          <p className="font-Open text-center text-[1.375rem] font-semibold text-[#666666] md:text-left">
            GET IN TOUCH: <span className="text-palletteColor1">222-222-2222</span>
          </p>
          <h2 className="mb-4 text-center font-fontOpen text-[2.18rem] font-bold text-palletteColor9 md:text-left">
            Grow your business now
          </h2>
        </div>
      </div>
      <EmailInput className="w-full" />
    </div>
  );
};

export default GetInTouch2;
