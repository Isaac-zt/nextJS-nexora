# Implement Nexora design system

## Goal

Encode the Nexora design board (`design/nexora-designsystem.png`) as Tailwind v4 tokens, root fonts, and reusable UI primitives in the existing Next.js app. Reproduce the board as a living style-guide page so later catalog, course, and lesson work can reuse the same tokens and components without restyling.

## Skills read

- `AGENTS.md` section 3 (UI: match the reference exactly; do not invent visuals) and section 5 (do not overbuild; no extra product features).
- Next.js App Router font docs (`node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` and `.../02-components/font.md`): load Google fonts via `next/font/google` in the root layout.
- No Sanity, Clerk, or search skills apply. This is tokens + primitives only.

## Code inspected

- App lives at the **repo root**, not a `web/` workspace yet. `package.json` is Next `16.3.5`, React `19.2.8`, Tailwind `^4` with `@tailwindcss/postcss`.
- `app/globals.css` still has the create-next-app Geist/zinc theme and a `prefers-color-scheme: dark` override. The design board is light-only.
- `app/layout.tsx` loads Geist + Geist Mono and uses `LayoutProps<"/">`.
- `app/page.tsx` is still the default Next starter. There are **no** existing UI components to reuse.
- `@/*` maps to the repo root.

## Decisions and assumptions

1. **Stay in the current Next app.** Do not split Studio/web workspaces in this task.
2. **Tokens in `@theme` (Tailwind v4), not a new CSS-in-JS system.** Map board colors, type, spacing, radius, and shadows to CSS variables so utilities like `bg-primary-600` and `font-display` work.
3. **Fonts:** Playfair Display (display / Display 1–2) and Inter (UI / body). Drop Geist. Load both with `next/font/google`, latin subset, CSS variables on `<html>`. Inter is the default `font-sans`.
4. **Light theme only.** Remove the dark `prefers-color-scheme` block. Do not invent a dark palette.
5. **Hex values** taken from the board labels (version 1.0, Sep 2025):

   | Token | Hex |
   | --- | --- |
   | primary-900 | `#0B7A6E` |
   | primary-600 | `#2A9D8F` |
   | primary-400 | `#4ECDC4` |
   | primary-200 | `#7FDED6` |
   | primary-100 | `#C8F4F0` |
   | neutral-900 | `#1A1F36` |
   | neutral-700 | `#2D3142` |
   | neutral-500 | `#6B7280` |
   | neutral-300 | `#9CA3AF` |
   | neutral-100 | `#F3F4F6` |
   | neutral-50 | `#F9FAFB` |
   | neutral-25 | `#FCFCFD` |
   | white | `#FFFFFF` |

   Error red used on the input error state is **not labeled**. Use a single `--color-error` of `#DC2626` (matches the board’s red outline) and do not expand a full red scale.

6. **Type scale** as labeled:

   | Style | Font | Size / line | Tracking | Weight |
   | --- | --- | --- | --- | --- |
   | Display 1 | Playfair Display | 48 / 56 | -0.02em | Semibold |
   | Display 2 | Playfair Display | 36 / 44 | -0.02em | Semibold |
   | Heading 1 | Inter | 24 / 32 | -0.01em | Semibold |
   | Heading 2 | Inter | 20 / 28 | -0.01em | Semibold |
   | Heading 3 | Inter | 16 / 24 | 0 | Semibold |
   | Body | Inter | 16 / 24 | 0 | Regular |
   | Small | Inter | 14 / 20 | 0 | Regular |
   | Caption | Inter | 12 / 16 | 0.01em | Regular |

   Implement as utility classes in `globals.css` (`.text-display-1`, `.text-h1`, `.text-body`, `.text-small`, `.text-caption`, etc.), not as extra heading components.

7. **Spacing:** 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Tailwind already covers these; do not invent a parallel scale unless a token name is needed for documentation.
8. **Radius:** none 0, sm 4, md 8, lg 12, xl 16, full 9999. Map onto `--radius-*` so `rounded-sm` through `rounded-xl` and `rounded-full` match the board (Tailwind v4 defaults are close; override `--radius-sm/md/lg/xl` explicitly).
9. **Shadows:**

   - sm: `0 1px 2px rgba(0,0,0,0.05)`
   - md: `0 4px 6px rgba(0,0,0,0.07)`
   - lg: `0 10px 15px rgba(0,0,0,0.1)`
   - xl: `0 20px 25px rgba(0,0,0,0.1)`

10. **Primitives only, matching the board sections.** Build small presentational components; no CMS, auth, or search wiring.

    - `Button`: variants `primary` | `secondary` | `ghost` | `outline`; sizes `sm` (32px) | `md` (40px) | `lg` (48px); disabled; pill (`rounded-full`); primary fill `primary-600`, white text; secondary fill `primary-100`, `primary-600` text; ghost transparent `primary-600` text; outline 1px `primary-600`.
    - `Badge`: `free-preview` (teal fill + teal text), `intermediate` (neutral fill + text), `lesson` (teal outline), `completed` (solid teal, white), `in-progress` (neutral outline), `locked` (neutral fill). Pill shape.
    - `Input`: default, focus (teal ring), error (red border + helper text), disabled; search variant with left search icon, pill, placeholder `Search courses...`.
    - `Progress`: determinate bar, teal fill, optional percent label (board shows 65%).
    - `Breadcrumbs`: slash-separated trail; current item in `neutral-900`; ancestors muted; optional leading brand mark as shown in section 13.
    - `Card`: white, `rounded-xl`, `shadow-md`, 16px padding; lesson-card layout from section 12 (teal play disc, title, description, duration). Four example titles from the board.

11. **Icons:** inline SVGs matching the board (search, check, lock, play, chevron). Do not add an icon library.
12. **Style guide page:** replace the starter `app/page.tsx` with a faithful reproduction of the board (sections 01–14: colors, type, spacing, radius, icons, buttons, inputs, badges, progress, cards, breadcrumbs, principles). This is documentation for builders, not a product catalog. Metadata title: `Nexora Design System`.
13. **Responsive:** desktop matches the board. Below ~768px, stack the two-column header and component grids; keep tokens and component look the same.
14. **Do not** add Storybook, a component library package, dark mode, motion beyond simple hover/focus, or product routes.

## Files expected to touch

- `app/globals.css` — tokens, type utilities, base body styles
- `app/layout.tsx` — Playfair Display + Inter, metadata
- `app/page.tsx` — style-guide layout matching the PNG
- `components/ui/button.tsx`
- `components/ui/badge.tsx`
- `components/ui/input.tsx`
- `components/ui/progress.tsx`
- `components/ui/breadcrumbs.tsx`
- `components/ui/card.tsx`
- `components/ui/icons.tsx` (shared SVGs)

## Requirements

- All color, type, radius, and shadow usage on the style-guide page comes from tokens/utilities, not one-off hex in JSX (exception: documenting the hex string as caption text).
- Components are TypeScript, accept `className`, and remain presentational (no `"use client"` unless an input needs local state for the focus/error demos — prefer static markup for those states).
- Buttons are `<button>`; links are not required on the style guide.
- Focus styles visible; do not `outline-none` without a replacement ring.
- Body background `neutral-25` / `#FCFCFD`; default text `neutral-900`.

## Security

- No secrets, tokens, or user data.
- No client-side CMS or auth.
- Style guide is public and read-only.

## Acceptance criteria

- Opening `/` shows a page that matches the design board: same sections, colors, type samples, button/input/badge/card/breadcrumb/progress states.
- `bg-primary-600`, `text-neutral-500`, `rounded-xl`, `shadow-md`, `font-display` resolve from `@theme`.
- Display headings use Playfair Display; UI text uses Inter.
- No Geist fonts remain.
- No dark-mode inversion.
- `npx tsc --noEmit` and `npm run lint` pass from the repo root.

## Checks to run

- `npx tsc --noEmit`
- `npm run lint`
- `npm run build` (layout, tokens, and root page change)
- Dev server: visual compare `/` to `design/nexora-designsystem.png` at desktop width; check stacked layout at a mobile width.

## Manual test steps

1. `npm run dev` and open `http://localhost:3000`.
2. Confirm Playfair Display on “Design System” / Display samples and Inter on body/UI.
3. Confirm primary swatches read `#0B7A6E` through `#C8F4F0` and neutrals `#1A1F36` through `#FFFFFF`.
4. Hover/focus/disabled on buttons; focus and error on inputs; search field shows the left icon.
5. Confirm badges, 65% progress, four lesson cards, and breadcrumbs match the board.
6. Narrow the viewport and confirm sections stack without overflowing.
7. Disable dark OS theme check: the page stays light.
