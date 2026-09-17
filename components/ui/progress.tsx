type ProgressProps = {
  value: number;
  className?: string;
  showLabel?: boolean;
};

export function Progress({
  value,
  className = "",
  showLabel = false,
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-neutral-100"
      >
        <div
          className="h-full rounded-full bg-primary-600"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel ? (
        <span className="text-caption font-medium text-neutral-500">
          {clamped}%
        </span>
      ) : null}
    </div>
  );
}
