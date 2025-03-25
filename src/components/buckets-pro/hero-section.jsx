import { Button } from '@components/common';
const HeroSection = () => {
  return (
    <section className="relative h-fit bg-hero-buckets-pro bg-cover bg-center">
      <div className="absolute inset-0 bg-[##88A444] opacity-50"></div>
      <div className="container relative m-auto pb-16 pt-56 md:mt-12">
        <p className="text-center font-fontOpen text-heading6 text-white md:text-left">Products</p>
        <h2 className="text-center font-fontOpen text-headingLargeMobile font-bold text-white md:text-left md:text-headingLarge">
          My FIeld Service Pro+
        </h2>
        <div className="flex justify-center md:justify-start">
          <Button>Start Free Trial</Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
