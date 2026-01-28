import { ButtonHTMLAttributes, forwardRef } from "react";

// "Rich Aesthetics" requires good implementation. I'll just use template strings for now.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-yellow-400 focus:ring-primary shadow-lg shadow-primary/20 hover:scale-105 active:scale-95",
            outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary hover:scale-105 active:scale-95",
            ghost: "text-foreground hover:bg-secondary hover:text-primary focus:ring-gray-500",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;

        return (
            <button ref={ref} className={classes} {...props} />
        );
    }
);

Button.displayName = "Button";
