import { EmailInput } from '@components/common';

const GetInTouch2 = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-surface to-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="font-fontInter text-lg font-semibold text-textSecondary mb-2">
            GET IN TOUCH: <a href="tel:222-222-2222" className="text-accent hover:text-accentHover transition-colors">222-222-2222</a>
          </p>
          <h2 className="font-fontInter text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-8">
            Ready to simplify your operations?
          </h2>
          <EmailInput className="w-full max-w-xl" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch2;
