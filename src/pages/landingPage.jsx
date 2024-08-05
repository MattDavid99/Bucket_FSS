import { motion } from 'framer-motion';
import { GetInTouch, Services, ShowcaseSolutions, Slider, Testimonials } from '@components/landing-page';
import { GetInTouch2 } from '@components/common';
import { EmailInput, Calendly } from '@components/common';
import AnimatedCounter from '@components/Counter';

const LandingPage = () => {
  return (
    <div>
      <section className="overflow-hidden bg-palletteColor10">
        <div className="container relative m-auto h-fit w-full lg:pt-16">
          <img
            className="absolute top-0 z-0 hidden xl:flex md:right-0 lg:-right-60 w-full object-cover h-full transform -rotate-6 opacity-10"
            src="/cartoon/fields-bg.png"
            alt=""
          />
          <div className="relative h-fit">
            <div className="z-10 mt-36 md:ml-8">
              <h3 className="relative z-10 w-auto max-w-screen-xl text-wrap text-center font-fontBebas text-heading1 font-bold text-[#424241] md:text-left md:text-[6.25rem] lg:mt-40 lg:pr-96">
                A FRESH TAKE FOR YOUR SERVICE COMPANY
                <svg
                  className="absolute left-16 top-0 w-48 md:left-10 md:top-10 md:h-[9.375] md:w-[23.5rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 500 150">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                    fill="none"
                    stroke="#008CFF"
                    strokeWidth="8"
                    d="M7.7 145.6C109 125 299.9 116.2 401 121.3c42.1 2.2 87.6 11.8 87.3 25.7"></motion.path>
                </svg>
              </h3>
              <p className="z-10 mb-8 text-center text-base text-[#928F8F] md:px-6 md:text-left md:text-xl lg:px-1">
                Drive Buisness Success with Our Efficient and Easy-to-Use Software
              </p>
              {/* Free Trail Form */}
              <EmailInput className="mb-12" />
              {/* Counts */}
              <div className="mb-16 mt-20 flex justify-center gap-8 md:flex-row md:justify-start md:gap-16 lg:gap-20">
                <div className="space- z-10 flex flex-col space-y-4">
                  <span className="text-center font-fontBebas text-2xl font-bold text-[#424241] md:text-[2.5rem]">
                    <AnimatedCounter from={0} to={10} />+
                  </span>
                  <span className="font-fontOpen text-sm font-medium text-[#909090] md:text-18">Years Experience</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="z-10 text-center font-fontBebas text-2xl font-bold text-[#424241] md:text-[2.5rem]">
                    <AnimatedCounter from={0} to={891} />
                  </span>

                  <span className="z-10 font-fontOpen text-sm font-medium text-[#909090] md:text-18">Cases Solved</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <span className="text-center font-fontBebas text-2xl font-bold text-[#424241] md:text-[2.5rem]">
                    <AnimatedCounter from={0} to={263} />+
                  </span>

                  <span className="font-fontOpen text-sm font-medium text-[#909090] md:text-18">Buisness Partners</span>
                </div>
              </div>
            </div>
            {/* <img className="absolute top-0 z-0 md:right-0 lg:-right-60" src="/landing-page/bg.png" alt="" /> */}

            {/* CARTOON */}

            <img src="/cartoon/2ppl-lg-rm.png" alt="Home Page Image Men" className="absolute -top-36 -right-40 hidden h-[60rem] lg:block" />
            <img
              className="absolute bottom-2 right-8 hidden h-44 translate-x-32 lg:block"
              src="/landing-page/boost.png"
              alt="Efficiency Boost Card Image"
            />
          </div>
        </div>
      </section>
      {/* showcase Services */}
      <Services />
      {/* Get in touch Section */}
      <GetInTouch />
      {/* Testimonials */}
      <Testimonials />
      {/* Showcase solutions */}
      <ShowcaseSolutions />
      {/* Slider  */}
      <Slider />
      <Calendly />

      {/* Get in touch 2 Section */}
      <GetInTouch2 />
    </div>
  );
};
export default LandingPage;
