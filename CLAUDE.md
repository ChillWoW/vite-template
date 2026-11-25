# CLAUDE.md

Vite + React + TypeScript + Tailwind template with a set of ready-made UI components in `src/ui/`.

# Stack

- Vite 8, React 19, TypeScript 7, Tailwind CSS v4 (via `@tailwindcss/vite`, imported in `src/index.css`), oxlint.
- Colors: dark-only token set in `@theme` in `src/index.css`. Tailwind's default palette is removed (`--color-*: initial`); use only the tokens: `bg`, `surface`, `raised`, `hover`, `border`, `text`, `muted`, `accent`, `accent-fg`, `success`, `danger`, `warning`, `info`, `black`, `white`, `transparent`, `current` (e.g. `bg-surface`, `text-muted`, `border-border`). Custom animations (`--animate-*` + `@keyframes`, e.g. `animate-skeleton-shimmer`) also live in that `@theme` block.
- UI components live in `src/ui/` (one file per component, named export, re-exported from `src/ui/index.ts`; import via `./ui`). Internal helpers shared between components (e.g. `menu-kind.ts`, used by `Menu` and `ContextMenu`) are lowercase `.ts` files that are not re-exported. Public hooks live in their own `use*.ts` file (e.g. `useModalStack.ts`), re-exported from `index.ts`, since oxlint's fast-refresh rule disallows exporting them next to components. Sub-parts attach as static properties on the main component (e.g. `Input.Group`, `Input.Addon`) instead of separate exports. `App.tsx` is an empty shell to build on.
- Class names: use `cn()` from `src/lib/cn.ts` (clsx + tailwind-merge).
- Headless UI primitives: `@base-ui/react` (import per component, e.g. `@base-ui/react/dialog`). `#root` has `isolation: isolate` in `src/index.css` so portaled popups stack correctly. The app is wrapped in `Tooltip.Provider` (150ms default tooltip delay) and `ModalStack` (hosts modals opened with `useModalStack()`) in `src/main.tsx`.
- Icons: `@phosphor-icons/react`, using the `*Icon`-suffixed names (e.g. `import { XIcon } from "@phosphor-icons/react"`).
- Package manager: **bun** only. Never use npm/npx/pnpm/yarn; use `bun install`, `bun add [-d]`, `bun run <script>`, `bunx`. Lockfile is `bun.lock`.

# Commands

- `bun run dev` — dev server
- `bun run build` — typecheck (`tsc -b`) + production build
- `bun run lint` — oxlint
- `bun run preview` — preview the build

# Conventions

- Keep this file up to date: whenever a change affects the stack, commands, structure, or conventions, update CLAUDE.md in the same commit.
- Commit messages follow Conventional Commits (`feat:`, `chore:`, `fix:`, …) with short subjects. Body only when truly needed.
- Never add a `Co-Authored-By` trailer (or any other attribution footer) to commit messages.
- Commit each finished feature yourself (one Conventional Commit per feature, staged by file), but only after the user has verified it and approved the commit; never push, the user pushes.
