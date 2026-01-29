/* eslint-disable react/prop-types */
import { cva } from 'class-variance-authority';
import { cn } from '@lib/utils';

const buttonVariants = cva(
  // Base styles
  'font-bold cursor-pointer text-center transition-all duration-300 inline-flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        primary: `bg-accent text-white hover:bg-accentHover rounded-full
                  shadow-md hover:shadow-lg
                  transform hover:-translate-y-0.5
                  py-4 px-8 btn-shine`,
        secondary: `text-accent hover:text-primary-950
                    transform hover:translate-x-1
                    font-fontInter group`,
        outline: `border-2 border-primary-900 text-primary-900
                  hover:bg-primary-900 hover:text-white
                  rounded-full py-4 px-8`,
        ghost: `text-textSecondary hover:text-primary-950
                hover:bg-slate-100 rounded-lg py-2 px-4`,
      },
      size: {
        default: 'text-base',
        small: 'text-sm py-2 px-4',
        large: 'text-lg py-5 px-10',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

const Button = ({ children, className, variant = 'primary', size = 'default', icon }) => {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)}>
      {children}
      {variant === 'secondary' && (
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
      {icon}
    </button>
  );
};

export default Button;
