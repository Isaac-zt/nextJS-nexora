import type { ReactNode } from "react";
import { PlayIcon } from "@/components/ui/icons";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white p-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

type LessonCardProps = {
  title: string;
  description: string;
  duration: string;
  className?: string;
};

export function LessonCard({
  title,
  description,
  duration,
  className = "",
}: LessonCardProps) {
  return (
    <Card className={className}>
      <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-primary-600 text-white">
        <PlayIcon className="size-5" />
      </div>
      <h3 className="text-h3 text-neutral-900">{title}</h3>
      <p className="mt-1 text-small text-neutral-500">{description}</p>
      <p className="mt-3 text-caption text-neutral-300">{duration}</p>
    </Card>
  );
}
