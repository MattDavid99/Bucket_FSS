import { EmailInput } from '@components/common';
const GetInTouch = () => {
  return (
    <div className="relative mt-4 h-fit bg-palletteColor10 px-4 lg:px-14 py-12 lg:py-28">
      <div className="flex flex-col items-center justify-center">
        <p className="font-Open text-center text-[1.375rem] font-semibold text-[#666666] md:text-left">
          GET IN TOUCH: <span className="text-palletteColor1">222-222-2222</span>
        </p>
        <h2 className="mb-6 text-center font-fontOpen text-heading2 font-bold text-palletteColor9 md:text-left">Let us earn your trust</h2>
        <p className="mb-6 text-center font-fontOpen text-palletteColor5 md:text-left">
          Buckets has your back every step of the way. Take the next step for your home cleaning business!
        </p>
        <EmailInput className="w-full" />
      </div>
    </div>
  );
};

export default GetInTouch;
