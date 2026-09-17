import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, LessonCard } from "@/components/ui/card";
import {
  BookmarkIcon,
  CheckIcon,
  LockIcon,
  NexoraMark,
  PlayIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const primarySwatches = [
  { name: "Primary 900", hex: "#0B7A6E", className: "bg-primary-900" },
  { name: "Primary 600", hex: "#2A9D8F", className: "bg-primary-600" },
  { name: "Primary 400", hex: "#4ECDC4", className: "bg-primary-400" },
  { name: "Primary 200", hex: "#7FDED6", className: "bg-primary-200" },
  { name: "Primary 100", hex: "#C8F4F0", className: "bg-primary-100" },
];

const neutralSwatches = [
  { name: "Neutral 900", hex: "#1A1F36", className: "bg-neutral-900" },
  { name: "Neutral 700", hex: "#2D3142", className: "bg-neutral-700" },
  { name: "Neutral 500", hex: "#6B7280", className: "bg-neutral-500" },
  { name: "Neutral 300", hex: "#9CA3AF", className: "bg-neutral-300" },
];

const lightSwatches = [
  { name: "Neutral 100", hex: "#F3F4F6", className: "bg-neutral-100" },
  { name: "Neutral 50", hex: "#F9FAFB", className: "bg-neutral-50" },
  { name: "Neutral 25", hex: "#FCFCFD", className: "bg-neutral-25 ring-1 ring-neutral-100" },
  { name: "White", hex: "#FFFFFF", className: "bg-white ring-1 ring-neutral-100" },
];

const typeRows = [
  { style: "Display 1", font: "Playfair Display", size: "48 / 56", tracking: "-0.02em", weight: "Semibold" },
  { style: "Display 2", font: "Playfair Display", size: "36 / 44", tracking: "-0.02em", weight: "Semibold" },
  { style: "Heading 1", font: "Inter", size: "24 / 32", tracking: "-0.01em", weight: "Semibold" },
  { style: "Heading 2", font: "Inter", size: "20 / 28", tracking: "-0.01em", weight: "Semibold" },
  { style: "Heading 3", font: "Inter", size: "16 / 24", tracking: "0", weight: "Semibold" },
  { style: "Body", font: "Inter", size: "16 / 24", tracking: "0", weight: "Regular" },
  { style: "Small", font: "Inter", size: "14 / 20", tracking: "0", weight: "Regular" },
  { style: "Caption", font: "Inter", size: "12 / 16", tracking: "0.01em", weight: "Regular" },
];

const spacingSteps = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

const radii = [
  { name: "None", className: "rounded-none", value: "0" },
  { name: "Sm", className: "rounded-sm", value: "4px" },
  { name: "Md", className: "rounded-md", value: "8px" },
  { name: "Lg", className: "rounded-lg", value: "12px" },
  { name: "Xl", className: "rounded-xl", value: "16px" },
  { name: "Full", className: "rounded-full", value: "9999px" },
];

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-xl bg-white p-6 shadow-md ${className}`}>
      <h2 className="mb-5 text-caption font-semibold tracking-[0.08em] text-neutral-500 uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-full bg-neutral-25">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <section className="rounded-xl bg-white p-8 shadow-md">
            <div className="mb-8 flex items-center gap-2">
              <NexoraMark />
              <span className="text-h3 text-neutral-900">Nexora</span>
            </div>
            <h1 className="text-display-1 text-neutral-900">Design System</h1>
            <p className="mt-4 max-w-sm text-body text-neutral-500">
              A unified design language for Nexora&apos;s learning platform.
              Clean, modern, and focused on clarity, consistency, and intuitive
              learning experiences.
            </p>
            <p className="mt-16 text-caption tracking-[0.12em] text-neutral-300 uppercase">
              Version 1.0 — Sep 2025
            </p>
          </section>

          <Panel title="01. Colour">
            <p className="mb-3 text-caption font-medium text-neutral-500">Primary</p>
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {primarySwatches.map((swatch) => (
                <Swatch key={swatch.name} {...swatch} />
              ))}
            </div>
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {neutralSwatches.map((swatch) => (
                <Swatch key={swatch.name} {...swatch} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {lightSwatches.map((swatch) => (
                <Swatch key={swatch.name} {...swatch} />
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="02. Typography">
            <div className="space-y-6">
              <div>
                <p className="text-display-1 text-neutral-900">Ag</p>
                <p className="mt-1 text-caption text-neutral-500">
                  Playfair Display — Semibold
                </p>
              </div>
              <div>
                <p className="text-h1 text-neutral-900">Ag</p>
                <p className="mt-1 text-caption text-neutral-500">
                  Inter — Regular / Semibold
                </p>
              </div>
            </div>
          </Panel>

          <Panel title="03. Type Scale">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left text-caption text-neutral-500">
                <thead>
                  <tr className="border-b border-neutral-100">
                    <th className="pb-2 font-medium">Style</th>
                    <th className="pb-2 font-medium">Font</th>
                    <th className="pb-2 font-medium">Size / LH</th>
                    <th className="pb-2 font-medium">Track</th>
                    <th className="pb-2 font-medium">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {typeRows.map((row) => (
                    <tr key={row.style} className="border-b border-neutral-50">
                      <td className="py-2 font-medium text-neutral-900">{row.style}</td>
                      <td className="py-2">{row.font}</td>
                      <td className="py-2">{row.size}</td>
                      <td className="py-2">{row.tracking}</td>
                      <td className="py-2">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="04. Spacing System">
            <p className="mb-4 text-caption text-neutral-500">4px base unit</p>
            <div className="flex h-28 items-end gap-2 overflow-x-auto">
              {spacingSteps.map((step, index) => (
                <div key={step} className="flex min-w-8 flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-sm bg-primary-200"
                    style={{ height: `${12 + index * 10}px` }}
                  />
                  <span className="text-caption text-neutral-500">{step}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="05. Radius & Shadows">
            <p className="mb-4 text-caption text-neutral-500">Radius</p>
            <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {radii.map((radius) => (
                <div key={radius.name} className="text-center">
                  <div
                    className={`mx-auto size-12 border border-neutral-100 bg-white shadow-sm ${radius.className}`}
                  />
                  <p className="mt-2 text-caption font-medium text-neutral-900">
                    {radius.name}
                  </p>
                  <p className="text-caption text-neutral-300">{radius.value}</p>
                </div>
              ))}
            </div>
            <p className="mb-3 text-caption text-neutral-500">Shadows</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg bg-white p-4 text-center text-caption font-medium text-neutral-700 shadow-sm">
                sm
              </div>
              <div className="rounded-lg bg-white p-4 text-center text-caption font-medium text-neutral-700 shadow-md">
                md
              </div>
              <div className="rounded-lg bg-white p-4 text-center text-caption font-medium text-neutral-700 shadow-lg">
                lg
              </div>
              <div className="rounded-lg bg-white p-4 text-center text-caption font-medium text-neutral-700 shadow-xl">
                xl
              </div>
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Panel title="06. Icons">
            <p className="mb-3 text-caption text-neutral-500">Outline Style</p>
            <div className="mb-6 flex gap-4 text-neutral-700">
              <SearchIcon className="size-5" />
              <UserIcon className="size-5" />
              <BookmarkIcon className="size-5" />
              <PlayIcon className="size-5" />
            </div>
            <p className="mb-3 text-caption text-neutral-500">Solid Style</p>
            <div className="mb-6 flex gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary-600 text-white">
                <PlayIcon className="size-4" />
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-primary-600 text-white">
                <CheckIcon className="size-4" />
              </span>
              <span className="flex size-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                <LockIcon className="size-4" />
              </span>
            </div>
            <ul className="space-y-1 text-caption text-neutral-500">
              <li>1.5px stroke</li>
              <li>24px viewport</li>
              <li>Rounded line caps</li>
              <li>Consistent corner radius</li>
            </ul>
          </Panel>

          <Panel title="07. Buttons">
            <div className="flex flex-wrap gap-2">
              <Button>Get Started</Button>
              <Button variant="secondary">Explore Courses</Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button variant="ghost">Learn More</Button>
              <Button variant="outline">View Catalog</Button>
            </div>
            <div className="mt-3">
              <Button disabled>Disabled</Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <p className="mt-4 text-caption text-neutral-500">
              Heights: 32 / 40 / 48px · Pill shape
            </p>
          </Panel>

          <Panel title="08. Inputs">
            <div className="space-y-3">
              <Input defaultValue="Default" aria-label="Default" />
              <Input defaultValue="Focused" aria-label="Focused example" className="border-primary-600 ring-2 ring-primary-600" />
              <div>
                <Input id="error-demo" defaultValue="Error state" error="This field is required" />
              </div>
              <Input defaultValue="Disabled" disabled aria-label="Disabled" />
              <Input variant="search" placeholder="Search courses..." aria-label="Search courses" />
            </div>
          </Panel>

          <Panel title="09. Badges">
            <div className="flex flex-wrap gap-2">
              <Badge variant="free-preview">Free Preview</Badge>
              <Badge variant="intermediate">Intermediate</Badge>
              <Badge variant="lesson">Lesson</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="completed">
                <CheckIcon className="size-3" />
                Completed
              </Badge>
              <Badge variant="in-progress">In Progress</Badge>
              <Badge variant="locked">
                <LockIcon className="size-3" />
                Locked
              </Badge>
            </div>
          </Panel>
        </div>

        <Panel title="11. Progress">
          <Progress value={65} showLabel />
        </Panel>

        <Panel title="12. Lesson Cards">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <LessonCard
              title="Hooks for Production"
              description="From mindset to production-ready patterns."
              duration="12 min"
            />
            <LessonCard
              title="Data Fetching in Server Components"
              description="How Next.js decides what to cache, and when."
              duration="18 min"
            />
            <LessonCard
              title="Data Fetching & Caching"
              description="The mental model for cached vs uncached data."
              duration="15 min"
            />
            <LessonCard
              title="Caching and Revalidation Basics"
              description="Time-based and on-demand revalidation."
              duration="10 min"
            />
          </div>
        </Panel>

        <Panel title="13. Breadcrumbs">
          <div className="mb-4 flex items-center gap-2">
            <NexoraMark className="size-6" />
            <Breadcrumbs
              items={[
                { label: "Nexora" },
                { label: "Courses" },
                { label: "My Learning" },
              ]}
            />
          </div>
          <Breadcrumbs
            items={[
              { label: "All Courses", href: "#" },
              { label: "Next.js for Production", href: "#" },
              { label: "Data Fetching & Caching" },
            ]}
          />
        </Panel>

        <Panel title="14. Principles">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Principle
              title="Clarity First"
              body="Design should never compete with content."
            />
            <Principle
              title="Consistency"
              body="Patterns repeat so learners always know where they are."
            />
            <Principle
              title="Focus & Calm"
              body="Reduce noise. Keep attention on what matters."
            />
            <Principle
              title="Accessible"
              body="Color is never the only indicator."
            />
          </div>
        </Panel>
      </main>
    </div>
  );
}

function Swatch({
  name,
  hex,
  className,
}: {
  name: string;
  hex: string;
  className: string;
}) {
  return (
    <div>
      <div className={`mb-2 h-16 rounded-lg ${className}`} />
      <p className="text-caption font-medium text-neutral-900">{name}</p>
      <p className="text-caption text-neutral-500">{hex}</p>
    </div>
  );
}

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <Card className="shadow-sm">
      <p className="text-h3 text-neutral-900">{title}</p>
      <p className="mt-1 text-small text-neutral-500">{body}</p>
    </Card>
  );
}
