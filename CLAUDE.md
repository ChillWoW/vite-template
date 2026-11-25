# CLAUDE.md

Vite template, `v2` branch: a full rework started from an empty history (`main` holds the old version).

# Stack

- Vite 8, React 19, TypeScript 7, Tailwind CSS v4 (via `@tailwindcss/vite`, imported in `src/index.css`), oxlint.
- Class names: use `cn()` from `src/lib/cn.ts` (clsx + tailwind-merge).
- Headless UI primitives: `@base-ui/react` (import per component, e.g. `@base-ui/react/dialog`). `#root` has `isolation: isolate` in `src/index.css` so portaled popups stack correctly.
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
