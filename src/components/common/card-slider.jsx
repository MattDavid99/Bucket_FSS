/* eslint-disable react/prop-types */
import { Button } from "@components/common"
const CardSlider = ({ imageSrc, title, description, link }) => {
    return (
        <div className="group cursor-grab p-2 transition-all duration-300 hover:bg-blue-500 lg:h-96 lg:w-fit">
            <img
                className="m-auto h-48 w-72 rounded-[0.625rem] object-cover"
                src={imageSrc}
                alt=""
            />
            <div className="ml-2">
                <h3 className="mt-6 font-fontPoppins font-medium transition-colors duration-300 group-hover:text-white">
                    {title}
                </h3>
                <p className="font-Open mt-2 text-14 text-[#6D7882] transition-colors duration-300 group-hover:text-white">
                    {description}
                </p>
                <a href={link}>
                    <Button
                        className="mt-4 font-bold transition duration-300 group-hover:text-white"
                        variant="secondary"
                    >
                        Read More {">"}
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default CardSlider
