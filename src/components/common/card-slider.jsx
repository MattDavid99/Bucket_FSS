/* eslint-disable react/prop-types */
import { Button } from '@components/common';

const CardSlider = ({ imageSrc, title, description, link }) => {
  return (
    <div className="group cursor-grab p-4 bg-white rounded-2xl
                    shadow-soft hover:shadow-hover
                    transform hover:-translate-y-1
                    transition-all duration-300 ease-out
                    border border-slate-100
                    lg:h-auto lg:w-fit">
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="px-2">
        <h3 className="font-fontInter text-lg font-bold text-primary-950 mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="font-fontInter text-sm text-textSecondary leading-relaxed mb-4">
          {description}
        </p>
        <a href={link}>
          <Button variant="secondary" className="text-sm">
            Read More
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CardSlider;
