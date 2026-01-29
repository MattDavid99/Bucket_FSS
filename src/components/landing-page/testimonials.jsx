import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AnimatedCounter from '@components/Counter';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// TODO: Replace with real customer testimonials
const Persons = [
  {
    name: 'Your customers here',
    role: 'Service Business Owner',
    img: '/landing-page/person1.png',
    comment: 'We\'re gathering feedback from our early customers. Want to share your experience? Contact us to be featured.',
  },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 1000 1000">
    <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Stats */}
          <div>
            <h2 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight mb-4">
              What our customers are saying about us
            </h2>

            <p className="font-fontInter text-lg text-textSecondary mb-8">
              Our customers are delighted with the exceptional service and high-quality products they receive from us.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 md:gap-16">
              <div className="flex flex-col">
                <span className="font-fontBebas text-5xl md:text-6xl font-bold text-primary-950">
                  <AnimatedCounter from={0} to={100} />+
                </span>
                <span className="font-fontInter text-textSecondary">Happy Customers</span>
              </div>

              <div className="flex flex-col">
                <span className="font-fontBebas text-5xl md:text-6xl font-bold text-primary-950">
                  4.<AnimatedCounter from={0} to={88} />
                </span>
                <span className="font-fontInter text-textSecondary mb-2">Overall Rating</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="bg-white rounded-2xl shadow-soft p-8 lg:p-10">
            <Carousel
              swipeable
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
              autoPlay
              autoPlaySpeed={5000}
              infinite
              responsive={responsive}>
              {Persons.map((person, index) => (
                <div key={index} className="flex flex-col items-center md:items-start">
                  {/* Quote Icon */}
                  <svg className="w-10 h-10 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Testimonial */}
                  <p className="font-fontInter text-lg text-textSecondary leading-relaxed mb-6 text-center md:text-left">
                    "{person.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={person.img}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
                      alt={person.name}
                    />
                    <div>
                      <h3 className="font-fontInter text-lg font-bold text-primary-950">
                        {person.name}
                      </h3>
                      <p className="font-fontInter text-sm text-textMuted">{person.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
