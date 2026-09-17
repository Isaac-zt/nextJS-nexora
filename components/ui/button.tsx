import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const variantClass = {
  primary: "bg-primary-600 text-white hover:bg-primary-900",
  secondary: "bg-primary-100 text-primary-600 hover:bg-primary-200",
  ghost: "bg-transparent text-primary-600 hover:bg-primary-100",
  outline:
    "border border-primary-600 bg-transparent text-primary-600 hover:bg-primary-100",
} as const;

const sizeClass = {
  sm: "h-8 px-3 text-small",
  md: "h-10 px-4 text-small",
  lg: "h-12 px-5 text-body",
} as const;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-neutral-100 disabled:text-neutral-300 disabled:hover:bg-neutral-100 ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    />
  );
}
