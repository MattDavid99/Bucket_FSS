import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  // animation for boxs

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <section className="container m-auto h-fit">
      <div className="text-center">
        <h4 className="mt-24 font-fontRoboto text-18 font-semibold text-[#928F8F] md:text-[1.375rem]">MAKE YOUR LIFE EASY</h4>
        <div>
          <h2 className="m-auto my-4 px-14 font-fontOpen text-2xl font-bold leading-10 text-palletteColor9 md:text-heading1 xl:px-96">
            Simplify complex tasks
            <br />
            for <span className="text-palletteColor1">every service industry</span>
          </h2>
        </div>
        <p className="m-auto mb-8 mt-2 px-14 font-fontOpen text-base font-medium text-palletteColor14 md:px-56">
          Buckets offers a comprehensive suite of top-tier functionalities tailored for home services enterprises, seamlessly integrated
          <br />
          within a user-friendly application.
        </p>
      </div>
      <div ref={ref} className="mt-6 flex flex-col gap-16 px-12 text-center md:mt-2 md:flex-row">
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}
          className="h-fit rounded-2xl border border-stone-200 p-6 relative">
          <img src="/cartoon/cleaner.png" alt="Cartoon Image" className="absolute -top-32 left-4 hidden h-[8rem] lg:block" />
          <img
            src="/landing-page/service1.jpg"
            className="h-[16.25rem] w-full rounded-t-2xl object-contain"
            alt="Service for Streamlined Job Management"
          />

          <h2 className="font-fontInter text-xl font-bold text-palletteColor5">Streamlined Job Management</h2>
          <p className="mb-4 mt-2 font-fontOpen text-[#999999]">
            From initial contact to final invoice, our platform offers precision in every step. Simplify job tracking and management
            seamlessly.
          </p>
        </motion.div>
        <motion.div
          className="h-fit rounded-2xl border border-stone-200 p-6"
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}>
          <img
            src="/landing-page/service2.jpg"
            className="h-[16.25rem] w-full rounded-t-2xl object-contain"
            alt="Service for Active Customer Engagement"
          />
          <h2 className="font-fontInter text-xl font-bold text-palletteColor5">Active Customer Engagement</h2>
          <p className="mb-4 mt-2 font-fontOpen text-[#999999]">
            Strengthen client connections with our full suite ofengagement tools, ensuring every interaction fromappointment to follow-up is
            impactful.
          </p>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}
          className="h-fit rounded-2xl border border-stone-200 p-6">
          <img
            src="/landing-page/service3.jpg"
            className="h-[16.25rem] w-full rounded-t-2xl object-contain"
            alt="Service for Data-Driven Decision Making"
          />

          <h2 className="font-fontInter text-xl font-bold text-palletteColor5">Data-Driven Decision Making</h2>
          <p className="mb-4 mt-2 font-fontOpen text-[#999999]">
            Leverage analytics for informed decisions. Our toolsoffer comprehensive, precise insights for enhancedbusiness performance in
            real time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
