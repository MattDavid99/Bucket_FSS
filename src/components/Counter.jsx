/* eslint-disable react/prop-types */
import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedCounter({ from, to }) {
    const count = useMotionValue(from)
    const rounded = useTransform(count, (latest) => {
        return Math.round(latest)
    })
    const ref = useRef(null)
    const inView = useInView(ref)

    // while in view animate the count
    useEffect(() => {
        if (inView) {
            animate(count, to, { duration: 3 })
        }
    }, [count, inView, to])

    return <motion.span ref={ref}>{rounded}</motion.span>
}
export default AnimatedCounter
