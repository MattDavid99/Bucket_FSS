import { Calendly } from "@components/common"

import {
    Testimonials,
    GetInTouch,
    HeroSection,
    Service1,
    Service2,
    GridServices,
    Features,
} from "@components/buckets-pro"

const BucketsProPage = () => {
    return (
        <div>
            <HeroSection />
            <Service1 />
            <Service2 />
            <GridServices />
            <Features />
            <Testimonials />
            <Calendly />
            <GetInTouch />
        </div>
    )
}

export default BucketsProPage
