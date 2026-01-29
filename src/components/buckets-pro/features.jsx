import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const featuresData = [
  {
    title: 'Connect your existing tools',
    description: 'Sync with QuickBooks, Google Calendar, and more—no manual work.',
    icon: '/buckets-pro/feature1.svg',
    alt: 'Integration Icon',
  },
  {
    title: 'Get your team up and running fast',
    description: 'Simple enough that your crew can start using it today.',
    icon: '/buckets-pro/feature2.svg',
    alt: 'Easy To Use Icon',
  },
  {
    title: 'Works on any device',
    description: 'Phone, tablet, or desktop—your data is always with you.',
    icon: '/buckets-pro/feature3.svg',
    alt: 'Cross Compatibility Icon',
  },
  {
    title: 'Grows with your business',
    description: 'Add users and jobs without slowdowns or limits.',
    icon: '/buckets-pro/feature4.svg',
    alt: 'Scalable Icon',
  },
  {
    title: 'Keep your business data safe',
    description: 'Your customer and job information stays protected.',
    icon: '/buckets-pro/feature5.svg',
    alt: 'Secure Icon',
  },
  {
    title: 'Start in minutes, not days',
    description: 'No complicated setup—just sign up and go.',
    icon: '/buckets-pro/feature6.svg',
    alt: 'Quick Setup Icon',
  },
  {
    title: 'Always available when you need it',
    description: 'Built on reliable infrastructure so your team is never stuck waiting.',
    icon: '/buckets-pro/feature7.svg',
    alt: 'Reliable Uptime Icon',
  },
  {
    title: 'Help when you need it',
    description: "Real support from real people, whenever you're stuck.",
    icon: '/buckets-pro/feature8.svg',
    alt: 'Technical Support Icon',
  },
  {
    title: 'Give your team the right access',
    description: 'Control who sees what across your organization.',
    icon: '/buckets-pro/feature9.svg',
    alt: 'Multiple Administrators Icon',
  },
];

const Features = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="relative mt-4 h-fit px-14 py-24">
      <div ref={ref} className="mb-12 text-center">
        <h2 className="relative font-fontOpen text-[2.688rem] font-bold text-palletteColor9">
          <span className="block text-center">Built to support your day-to-day operations</span>
          <div className="absolute bottom-0 left-0 w-full translate-y-[10%] transform">
            <svg className="mx-auto h-auto w-[26rem]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 500 150">
              <motion.path
                animate={controls}
                initial="hidden"
                transition={{ duration: 1, ease: 'easeInOut' }}
                variants={{
                  visible: { pathLength: 1 },
                  hidden: { pathLength: 0 },
                }}
                fill="none"
                stroke="#82ce51"
                strokeWidth="9"
                d="M7.7 145.6C109 125 299.9 116.2 401 121.3c42.1 2.2 87.6 11.8 87.3 25.7"></motion.path>
            </svg>
          </div>
        </h2>
        <p className="mt-2 font-fontOpen text-base text-palletteColor5">
          Scale your service business with our suite of all in one solution
        </p>
      </div>
      <div className="container mx-auto space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex h-fit flex-col items-center gap-2 rounded-[0.625rem] p-6 shadow-md shadow-[#b6b6b6] md:flex-row">
            <div className="flex h-fit w-full items-center justify-center rounded-[0.625rem] bg-palletteColor12 p-4 md:w-fit">
              <img className="size-10 transform duration-300 hover:scale-x-[-1]" src={feature.icon} alt={feature.alt} />
            </div>
            <div>
              <h3 className="mb-2 xl:text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
