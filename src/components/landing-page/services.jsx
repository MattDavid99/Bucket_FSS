import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  const services = [
    {
      image: '/landing-page/service1.jpg',
      title: 'Streamlined Job Management',
      description: 'Track every job from booking to completion. Know who\'s where, what\'s done, and what\'s next—at a glance.',
      cartoon: '/cartoon/cleaner.png',
    },
    {
      image: '/landing-page/Customers-Img.png',
      title: 'Active Customer Engagement',
      description: 'Send appointment reminders, follow up after jobs, and keep customers coming back with automated messages.',
    },
    {
      image: '/landing-page/service3.jpg',
      title: 'Data-Driven Decision Making',
      description: 'See which jobs are profitable, which technicians are busiest, and where your business is growing.',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-fontInter text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            BUILT FOR SERVICE BUSINESSES
          </span>
          <h2 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight mb-6">
            One platform to manage{' '}
            <span className="text-accent">jobs, customers, and payments</span>
          </h2>
          <p className="font-fontInter text-lg text-textSecondary">
            Everything you need to run your service business—from the first call to the final invoice—without switching between apps.
          </p>
        </div>

        {/* Service Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              animate={controls}
              initial="hidden"
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-6
                         shadow-soft hover:shadow-hover
                         transform hover:-translate-y-2 hover:scale-[1.02]
                         transition-all duration-300 ease-out
                         border border-slate-100">
              {service.cartoon && (
                <img
                  src={service.cartoon}
                  alt=""
                  className="absolute -top-24 left-4 hidden lg:block h-24 opacity-80"
                />
              )}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={service.image}
                  className="h-56 w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  alt={service.title}
                />
              </div>
              <h3 className="font-fontInter text-xl font-bold text-primary-950 mb-3">
                {service.title}
              </h3>
              <p className="font-fontInter text-textSecondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
