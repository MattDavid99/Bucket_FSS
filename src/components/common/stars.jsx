/* eslint-disable react/prop-types */
import { cn } from "@lib/utils"
const Stars = ({ color = "#FFC107", number = 5, className = "" }) => {
    const starsArray = Array.from({ length: number })
    return (
        <div
            className={cn(
                "flex flex-row justify-center md:justify-start",
                className,
            )}
        >
            {starsArray.map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    style={{ fill: color }}
                    viewBox="0 0 1000 1000"
                >
                    <path d="M450 75L338 312 88 350c-42 4-63 67-30 100l180 183-42 263c-8 46 42 79 79 58l225-117 225 117c42 21 88-12 79-58l-41-263 179-183c33-33 12-92-29-100l-250-38L550 75c-21-42-79-42-100 0z"></path>
                </svg>
            ))}
        </div>
    )
}
export default Stars
