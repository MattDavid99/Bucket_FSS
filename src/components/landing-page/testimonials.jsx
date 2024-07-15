import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import AnimatedCounter from "@components/Counter"
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

// here to add the Testimonials component to the landingPage.jsx file. This component will display a carousel of testimonials from customers.

const Persons = [
    {
        name: "Enagol Ame",
        role: "WP Developer",
        img: "/landing-page/person1.png",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
        name: "Adam Smith",
        role: "SEO Expert",
        img: "/landing-page/person1.png",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
        name: "jhon Deo",
        role: "Web Designer",
        img: "/landing-page/person1.png",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
        name: "Amily Moalin",
        role: "WP Officer",
        img: "/landing-page/person1.png",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
]
const Testimonials = () => {
    return (
        <section className="container relative m-auto mt-12 grid grid-cols-1 grid-rows-1 gap-4 px-14 py-10 md:grid-cols-2 lg:py-16">
            <div>
                <h2 className="text-center font-fontOpen text-[2rem] font-bold text-[#31343A] md:text-left lg:pr-36">
                    What our customers are
                    <br />
                    saying about us
                </h2>
                <p className="mt-2 text-center font-fontRoboto text-palletteColor6 md:text-left">
                    Our customers are delighted with the exceptional service and
                    high-quality products they receive from us. Here are some of
                    their testimonials:
                </p>
                <div className="flex flex-col items-center py-8 font-fontRoboto text-palletteColor5 md:flex-row md:justify-between md:pr-24 lg:pr-64">
                    <div className="flex flex-col items-center text-center md:text-left">
                        <span className="text-[2.125rem] font-bold md:text-[3.125rem]">
                            <AnimatedCounter from={0} to={100} />
                        </span>
                        <span className="text-base">Happy People</span>
                    </div>
                    <div className="items:center flex flex-col text-center md:text-left">
                        <span className="text-headingLargeMobile font-bold md:text-[3.125rem]">
                            4.
                            <AnimatedCounter from={0} to={88} />
                        </span>
                        <span className="text-base">Overall Rating</span>
                        <div className="flex flex-row justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                style={{ fill: "#FFC107" }}
                                viewBox="0 0 1000 1000"
                            >
                                <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z"></path>
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                style={{ fill: "#FFC107" }}
                                viewBox="0 0 1000 1000"
                            >
                                <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z"></path>
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                style={{ fill: "#FFC107" }}
                                viewBox="0 0 1000 1000"
                            >
                                <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z"></path>
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                style={{ fill: "#FFC107" }}
                                viewBox="0 0 1000 1000"
                            >
                                <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z"></path>
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4"
                                style={{ fill: "#FFC107" }}
                                viewBox="0 0 1000 1000"
                            >
                                <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Carousel
                    swipeable={false}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    autoPlay
                    responsive={responsive}
                >
                    {Persons.map((person, index) => (
                        <div
                            className="mt-16 flex flex-col items-center md:mt-4 md:items-start"
                            key={index}
                        >
                            <img
                                src={person.img}
                                className="h-20 w-20 content-center rounded-full"
                                alt="Person image"
                            />
                            <h2 className="mt-4 font-fontOpen text-[1.125rem] font-semibold text-[#0d0925]">
                                {person.name}
                            </h2>
                            <p className="font-fontOpen text-heading6 text-palletteColor13">
                                {person.role}
                            </p>
                            <p className="mt-6 text-center font-fontOpen text-heading6 font-medium text-[#31343A] md:text-left">
                                {person.comment}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonials
