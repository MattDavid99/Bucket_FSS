import React from 'react';

const GetInTouch = () => {
  const features = [
    {
      title: 'Drive Sales',
      image: '/landing-page/increase-1.png',
      alt: 'Increase Sales',
      description: 'Boost your revenue with our innovative sales strategies.'
    },
    {
      title: 'Complete Jobs',
      image: '/landing-page/work-1.png',
      alt: 'Complete Jobs',
      description: 'Efficiently manage and finish tasks on time, every time.'
    },
    {
      title: 'Manage Money',
      image: '/landing-page/assets-1.png',
      alt: 'Manage Assets',
      description: 'Take control of your finances with our powerful tools.'
    },
    {
      title: 'Know Your Business',
      image: '/landing-page/analysis-1.png',
      alt: 'Analysis',
      description: 'Gain deep insights into your operations for informed decisions.'
    },
    {
      title: 'Innovate Solutions',
      image: '/landing-page/solutions-1.png',
      alt: 'Solutions',
      description: 'Stay ahead with cutting-edge solutions for your challenges.'
    },
  ];

  const FeatureItem = ({ feature }) => (
    <div className="flex flex-col items-center text-center max-w-[200px]">
      <div className="bg-palletteColor1/50 rounded-lg p-2 mb-2">
        <img
          src={feature.image}
          className="w-12 h-12 transform transition-transform duration-300 hover:scale-x-[-1]"
          alt={feature.alt}
        />
      </div>
      <h4 className="text-md font-semibold text-[#373940] mb-1">{feature.title}</h4>
      <p className="text-sm text-[#373940]">{feature.description}</p>
    </div>
  );

  return (
    <section className="relative mt-28 h-fit bg-palletteColor10 py-14 md:py-16">
      <div className="text-center mb-12">
        <p className="font-fontOpen text-[1.375rem] font-semibold text-palletteColor14">
          GET IN TOUCH: <span className="text-palletteColor1">222-222-2222</span>
        </p>
        <h2 className="font-fontOpen text-[1.563rem] font-bold text-[#31343A] mb-2">
          Revolutionize how work is done with Buckets
        </h2>
        <p className="font-fontOpen text-base text-[#373940] max-w-2xl mx-auto">
          Streamline your workflow, boost productivity, and take control of your business with our innovative bucket system.
        </p>
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/4 flex flex-col justify-center items-center space-y-8">
            <FeatureItem feature={features[0]} />
            <FeatureItem feature={features[1]} />
          </div>
          <div className="w-full md:w-1/4 flex justify-center my-8 md:my-0">
            <img src="/cartoon/cross-arm-hd.png" alt="Central Buckets Logo" className="w-40 h-auto" />
          </div>
          <div className="w-full md:w-1/4 flex flex-col justify-center items-center space-y-8">
            <FeatureItem feature={features[2]} />
            <FeatureItem feature={features[3]} />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <FeatureItem feature={features[4]} />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
