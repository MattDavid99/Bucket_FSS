import { Stars } from '@components/common'
const Testimonial = () => {
  return (
    <div className="container relative m-auto mt-12 px-4 py-10">
      <div className="mb-2 text-center">
        <p className="font-fontOpen text-base text-heading6 font-medium text-palletteColor5">
          WHAT OUR PROS SAY
        </p>
        <h1 className="font-fontOpen text-heading3 font-bold text-palletteColor9">
          Best all in one solution
        </h1>
      </div>
      <div className="mt-14 ml-10 flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="order-1">
          <Stars className="justify-start" />
          <h2 className="mt-4 font-fontPoppins text-heading4 font-medium leading-[2.188rem] text-palletteColor9">
            &quot;I absolutely love this app and the crew behind it! Every
            single person that I have interacted with at My Field Service has been
            phenomenal! Definitely a partner for life. &quot;
          </h2>
          <h3 className="mt-5 font-fontOpen font-medium text-palletteColor5">
            Shelly Khao
          </h3>
          <p className="text-palletColor5 font-fontOpen text-xs">
            Zeisp Electric LLC
          </p>
        </div>
        <div className="max-w-[36.805rem]">
          <img
            src="/commercial-cleaning-copy/smile-guy-scaled.jpeg"
            width="100%"
            height="100%"
            alt="Image of a guy wearing helmet and smiling"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
