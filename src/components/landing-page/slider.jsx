import { CardSlider } from '@components/common';
import Carousel from 'react-multi-carousel';
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

// Here You can replace the data with your own data

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
      <div className="container mx-auto px-14 py-14">
        <h2 className="font-fontOpen text-heading2 font-bold text-palletteColor9">
          Looking to Grow?
          <p className="break-words">We&apos;ve Got You covered.</p>
        </h2>

        <p className="font-fontRoboto text-base text-palletteColor6">
          Interested in learning how to grow your business and better serve your customers? Check out our latest posts!
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="m-auto mt-10"
          containerClass="container"
          dotListClass=""
          draggable
          autoPlay
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          {SliderCards.map((card, index) => (
            <CardSlider key={index} {...card} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
