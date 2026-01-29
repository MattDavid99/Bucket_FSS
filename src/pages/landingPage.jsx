import { motion } from 'framer-motion';
import { AiSupport, GetInTouch, ProblemSolution, Services, ShowcaseSolutions, Slider, Testimonials } from '@components/landing-page';
import { GetInTouch2 } from '@components/common';
import { EmailInput, Calendly } from '@components/common';
import AnimatedCounter from '@components/Counter';

const LandingPage = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-surface to-surfaceAlt min-h-[80vh]">
        <div className="container max-w-screen-xl px-4 relative m-auto h-fit w-full pt-24 lg:pt-32 pb-16">
          {/* Background decoration - subtle */}
          <div className="absolute inset-0 z-0 opacity-5">
            <img
              src="/cartoon/2ppl-lg-rm.png"
              alt=""
              className="absolute top-0 right-0 xl:hidden w-full object-cover h-full"
            />
          </div>

          <div className="relative h-fit">
            <div className="z-10 items-center flex flex-col xl:items-start max-w-4xl">
              {/* Main Headline - Much larger */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 font-fontBebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                           font-bold text-primary-950 leading-tight text-center xl:text-left">
                SCHEDULING, CUSTOMERS, AND JOB TRACKING FOR SERVICE BUSINESSES
                <svg
                  className="absolute left-4 -bottom-2 w-32 sm:w-48 md:w-64 lg:w-80"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 500 150">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                      delay: 0.5
                    }}
                    fill="none"
                    stroke="#82ce51"
                    strokeWidth="10"
                    d="M7.7 145.6C109 125 299.9 116.2 401 121.3c42.1 2.2 87.6 11.8 87.3 25.7"></motion.path>
                </svg>
              </motion.h1>

              {/* Subheadline - Cleaner */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="z-10 mt-6 mb-8 text-center xl:text-left text-lg md:text-xl text-textSecondary max-w-2xl">
                Simple tools to help small service teams stay organized and on schedule.
              </motion.p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full xl:w-auto">
                <EmailInput className="lg:mb-8" />
              </motion.div>

              {/* Social proof - Subtle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-wrap justify-center xl:justify-start items-center gap-6 text-textMuted text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  Trusted by 500+ businesses
                </span>
                <span className="hidden sm:block w-px h-4 bg-slate-300"></span>
                <span>4.8/5 rating</span>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 lg:mt-16 flex flex-wrap justify-center xl:justify-start gap-8 md:gap-12 lg:gap-16">
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-fontBebas text-3xl md:text-4xl font-bold text-primary-950">
                    <AnimatedCounter from={0} to={10} />+
                  </span>
                  <span className="font-fontInter text-sm text-textSecondary">Years in Business</span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-fontBebas text-3xl md:text-4xl font-bold text-primary-950">
                    <AnimatedCounter from={0} to={500} />+
                  </span>
                  <span className="font-fontInter text-sm text-textSecondary">Businesses Served</span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-fontBebas text-3xl md:text-4xl font-bold text-primary-950">
                    4.8<span className="text-2xl">★</span>
                  </span>
                  <span className="font-fontInter text-sm text-textSecondary">Customer Rating</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Image - Clean single illustration */}
            <img
              src="/cartoon/2ppl-lg-rm.png"
              alt="Field service professionals"
              className="absolute hidden lg:block
                         right-0 bottom-0
                         lg:h-[28rem] xl:h-[36rem] 2xl:h-[44rem]
                         transition-all duration-300 z-10"
            />
          </div>
        </div>
      </section>
      {/* Problem → Solution */}
      <ProblemSolution />
      {/* showcase Services */}
      <Services />
      {/* Get in touch Section */}
      <GetInTouch />
      {/* Testimonials */}
      <Testimonials />
      {/* Showcase solutions */}
      <ShowcaseSolutions />
      {/* AI Support */}
      <AiSupport />
      {/* Slider  */}
      <Slider />
      <Calendly />

      {/* Get in touch 2 Section */}
      <GetInTouch2 />
    </div>
  );
};
export default LandingPage;
