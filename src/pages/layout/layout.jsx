import { Outlet } from "react-router-dom"
import Footer from "./footer"
import Header from "./header"
import ScrollToTop from "@lib/ScrollToTop"

const Layout = () => {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
