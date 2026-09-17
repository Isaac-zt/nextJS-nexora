import type { ComponentProps } from "react";
import { SearchIcon } from "@/components/ui/icons";

type InputProps = ComponentProps<"input"> & {
  variant?: "default" | "search";
  error?: string;
};

export function Input({
  variant = "default",
  error,
  className = "",
  disabled,
  id,
  ...props
}: InputProps) {
  const describedBy = error && id ? `${id}-error` : undefined;
  const radius = variant === "search" ? "rounded-full" : "rounded-lg";
  const padding = variant === "search" ? "pl-10 pr-4" : "px-3";

  return (
    <div className="w-full">
      <div className="relative">
        {variant === "search" ? (
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-300" />
        ) : null}
        <input
          id={id}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`h-10 w-full border bg-white text-small text-neutral-900 placeholder:text-neutral-300 ${padding} ${radius} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-300 ${
            error
              ? "border-error"
              : "border-neutral-100 focus-visible:border-primary-600"
          } ${className}`}
          {...props}
        />
      </div>
      {error ? (
        <p id={describedBy} className="mt-1 text-caption text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
