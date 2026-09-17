import type { ReactNode } from "react";

type BadgeVariant =
  | "free-preview"
  | "intermediate"
  | "lesson"
  | "completed"
  | "in-progress"
  | "locked";

type BadgeProps = {
  variant: BadgeVariant;
  children: ReactNode;
  className?: string;
};

const variantClass: Record<BadgeVariant, string> = {
  "free-preview": "bg-primary-100 text-primary-900",
  intermediate: "bg-neutral-100 text-neutral-700",
  lesson: "border border-primary-600 bg-white text-primary-600",
  completed: "bg-primary-600 text-white",
  "in-progress": "border border-neutral-300 bg-white text-neutral-500",
  locked: "bg-neutral-100 text-neutral-500",
};

export function Badge({ variant, children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-caption font-medium ${variantClass[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
