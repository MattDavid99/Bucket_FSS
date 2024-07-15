import { Button } from "@components/common"
const HeroSection = () => {
    return (
        <section className="relative h-fit bg-hero-buckets-pro bg-cover bg-center">
            <div className="absolute inset-0 bg-[#1E2764] opacity-50"></div>
            <div className="container relative m-auto pb-16 pt-56 md:mt-12">
                <p className="text-center font-fontOpen text-heading6 text-white md:text-left">
                    Products
                </p>
                <h2 className="text-center font-fontOpen text-headingLargeMobile font-bold text-white md:text-left md:text-headingLarge">
                    Buckets Pro+
                </h2>
                <div className="flex justify-center md:justify-start">
                    <Button>Start Free Trail</Button>
                </div>
            </div>
        </section>
    )
}
export default HeroSection
