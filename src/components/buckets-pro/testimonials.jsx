import Carousel from 'react-multi-carousel';
import { Stars } from '@components/common';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialsData = [
  {
    name: 'Zack Hisamitusu',
    position: 'Case Manager',
    image: '/buckets-pro/testimonial1.jpeg',
    stars: 5,
  },
  {
    name: 'Ben Mcdonald',
    position: 'Sub Contracting',
    image: '/buckets-pro/testimonial2.jpg',
    stars: 5,
  },
  {
    name: 'Lay Chan',
    position: 'Cleaner',
    image: '/buckets-pro/testimonial3.jpeg',
    stars: 5,
  },
  {
    name: 'Casey Adam',
    position: 'Case Manager',
    image: '/buckets-pro/testimonial2.jpg',
    stars: 5,
  },
  {
    name: 'Adam Smith',
    position: 'Pest Control Agent',
    image: '/buckets-pro/testimonial1.jpeg',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="relative mt-4 h-fit bg-palletteColor10 px-14 py-24">
      <div className="container mx-auto">
        <div className="mb-2 text-center">
          <p className="text-base text-heading6 font-medium text-palletteColor5">WHAT OUR CLIENTS SAY</p>
          <h1 className="font-Open text-headingMobile font-bold text-palletteColor9 md:text-heading1">Testimonials</h1>
        </div>
        <div>
          <Carousel
            draggable
            arrows={false}
            autoPlay
            infinite
            showDots
            dotListClass="mb-9"
            keyBoardControl
            pauseOnHover
            renderDotsOutside
            responsive={responsive}>
            {TestimonialsData.map((testimonial, index) => (
              <div key={index} className="mx-4">
                <div className="rounded-[0.625rem] border border-gray-300 bg-white p-6">
                  <div className="flex flex-col">
                    <img className="mt-2 size-20 rounded-full object-cover" src={testimonial.image} alt="" />

                    <h3 className="mt-4 font-fontOpen text-18 text-black">{testimonial.name}</h3>
                    <p className="mb-4 mt-2 font-fontOpen text-heading6 text-palletteColor13">{testimonial.position}</p>

                    <div className="mb-4">
                      <Stars color="#82ce51" number={testimonial.stars} />
                    </div>

                    <p className="font-fontOpen text-heading6 text-palletteColor13">
                      Before we had My Field Service. a lot of our issues were trying to get all our customers into one database.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
