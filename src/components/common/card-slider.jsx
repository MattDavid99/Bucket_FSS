/* eslint-disable react/prop-types */
import { Button } from '@components/common';
const CardSlider = ({ imageSrc, title, description, link }) => {
  return (
    <div className="group cursor-grab p-2 bg-white rounded-lg transition-all duration-300 hover:bg-[#82ce51] lg:h-96 lg:w-fit">
      <img className="m-auto h-48 w-full object-cover rounded-[0.625rem]" src={imageSrc} alt="" />
      <div className="ml-2">
        <h3 className="mt-6 font-fontPoppins font-medium transition-colors duration-300 group-hover:text-white">{title}</h3>
        <p className="font-Open mt-2 text-14 text-[#6D7882] transition-colors duration-300 group-hover:text-white">{description}</p>
        <a href={link}>
          <Button className="mt-4 font-bold transition duration-300 group-hover:text-white" variant="secondary">
            Read More {'>'}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CardSlider;
