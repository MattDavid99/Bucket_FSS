import React from 'react';

const GetInTouch = () => {
  const features = [
    {
      title: 'Win More Jobs',
      image: '/landing-page/increase-1.png',
      alt: 'Win More Jobs',
      description: 'Turn quotes into work with professional estimates customers can approve on the spot.',
    },
    {
      title: 'Finish Jobs Faster',
      image: '/landing-page/work-1.png',
      alt: 'Finish Jobs Faster',
      description: 'Give your team the info they need—job details, customer history, directions—all in one app.',
    },
    {
      title: 'Get Paid Faster',
      image: '/landing-page/assets-1.png',
      alt: 'Get Paid Faster',
      description: 'Send invoices the moment a job is done and accept payments on-site.',
    },
    {
      title: 'Know Your Numbers',
      image: '/landing-page/analysis-1.png',
      alt: 'Know Your Numbers',
      description: 'See revenue, job costs, and technician performance in real-time dashboards.',
    },
    {
      title: 'Work From Anywhere',
      image: '/landing-page/solutions-1.png',
      alt: 'Work From Anywhere',
      description: 'Access your schedule, customers, and invoices from your phone, tablet, or desktop.',
    },
  ];

  const FeatureItem = ({ feature }) => (
    <div className="group flex flex-col items-center text-center max-w-[220px] p-4">
      <div className="bg-accent/10 rounded-2xl p-4 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
        <img
          src={feature.image}
          className="w-14 h-14 transform transition-transform duration-300 group-hover:scale-110"
          alt={feature.alt}
        />
      </div>
      <h4 className="font-fontInter text-lg font-bold text-primary-950 mb-2">{feature.title}</h4>
      <p className="font-fontInter text-sm text-textSecondary leading-relaxed">{feature.description}</p>
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-surface to-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-fontInter text-lg font-semibold text-textSecondary mb-2">
            GET IN TOUCH: <a href="tel:222-222-2222" className="text-accent hover:text-accentHover transition-colors">222-222-2222</a>
          </p>
          <h2 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
            Less paperwork. More billable hours.
          </h2>
          <p className="font-fontInter text-lg text-textSecondary max-w-2xl mx-auto">
            Spend less time on admin and more time on the jobs that pay.
          </p>
        </div>

        {/* Features Layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Left Features */}
            <div className="flex flex-col space-y-6">
              <FeatureItem feature={features[0]} />
              <FeatureItem feature={features[1]} />
            </div>

            {/* Center Image */}
            <div className="hidden md:flex justify-center items-center px-8">
              <img
                src="/cartoon/cross-arm-hd.png"
                alt="Field Service Professional"
                className="w-48 h-auto drop-shadow-lg"
              />
            </div>

            {/* Right Features */}
            <div className="flex flex-col space-y-6">
              <FeatureItem feature={features[2]} />
              <FeatureItem feature={features[3]} />
            </div>
          </div>

          {/* Bottom Feature */}
          <div className="flex justify-center mt-8">
            <FeatureItem feature={features[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
