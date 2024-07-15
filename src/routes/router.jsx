import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import Layout from "@pages/layout/layout"

import {
    LandingPage,
    CommercialCleaningPage,
    BucketsProPage,
    ContactPage,
    PricingPage,
} from "@pages"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route
                    path="/commercial-cleaning-copy"
                    element={<CommercialCleaningPage />}
                />

                <Route path="/buckets-pro" element={<BucketsProPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
            </Route>
        </Route>,
    ),
)
export default router
