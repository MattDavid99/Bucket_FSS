import { Testimonial, GetInTouch2 } from "@components/common"
import { PickPlan, ShowcaseSolutions, FaqAccordion } from "@components/pricing"

const PricingPage = () => {
    return (
        <div>
            <PickPlan />
            <ShowcaseSolutions />
            <Testimonial />
            <FaqAccordion />
            <GetInTouch2 />
        </div>
    )
}
export default PricingPage
