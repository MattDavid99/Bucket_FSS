import React from 'react';
import { CardSlider } from '@components/common';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const SliderCards = [
  {
    imageSrc: '/landing-page/Blog4.png',
    title: 'Insights For Your Business',
    description: 'Discover insights, guids, articles,resources, and more from the team at Buckets',
    link: '#',
  },
  {
    imageSrc: '/landing-page/Blog4.png',
    title: 'Insights For Your Business',
    description: 'Discover insights, guids, articles,resources, and more from the team at Buckets',
    link: '#',
  },
  {
    imageSrc: '/landing-page/Blog3.png',
    title: "What's New in Buckets",
    description: 'Stay up to date with the latest features and updates from Buckets',
    link: '#',
  },
  {
    imageSrc: '/landing-page/Blog2.png',
    title: 'Insights For Your Business',
    description: 'Discover insights, guids, articles,resources, and more from the team at Buckets',
    link: '#',
  },
];

const Slider = () => {
  return (
    <section className="relative h-fit bg-palletteColor10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-fontOpen text-heading2 font-bold text-palletteColor9">
          Looking to Grow?
          <p className="break-words">We&apos;ve Got You covered.</p>
        </h2>

        <p className="font-fontRoboto text-base text-palletteColor6 mt-4">
          Interested in learning how to grow your business and better serve your customers? Check out our latest posts!
        </p>

        <div className="mt-10 -mx-4">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-2 rounded-lg">
            {SliderCards.map((card, index) => (
              <div key={index} className="pb-4">
                <CardSlider {...card} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Slider;
