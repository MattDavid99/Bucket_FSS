/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority"
import { cn } from "@lib/utils"

const buttonVariants = cva(
    // Base styles
    "font-bold cursor-pointer text-center transition-all duration-500",
    {
        variants: {
            variant: {
                primary:
                    "bg-[#008CFF] text-white hover:bg-[#439eff] hover:text-black rounded-[2.5rem] shadow-xs py-3 px-[2.12rem]",
                secondary:
                    "text-palletteColor1 hover:text-palletteColor5 hover:scale-110 transform mt-2 font-fontbase",
            },
            size: {
                default: "text-base",
                small: "text-sm",
                large: "text-lg",
                full: "w-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    },
)
const Button = ({
    children,
    className,
    variant = "primary",
    size = "default",
}) => {
    return (
        <button className={cn(buttonVariants({ variant, size }), className)}>
            {children}
        </button>
    )
}

export default Button
