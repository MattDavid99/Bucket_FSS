import { GetInTouch, Calendly } from "@components/common"
import {
    CallUsNowSection,
    Features1,
    GoogleMap,
    Features2,
} from "@components/contact"
const ContactPage = () => {
    return (
        <div>
            <CallUsNowSection />
            <Features1 />
            <GoogleMap />
            <Features2 />
            <Calendly />
            <GetInTouch />
        </div>
    )
}

export default ContactPage
