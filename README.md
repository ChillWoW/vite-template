# Vite Template

A modern starter template built with Vite, React, TypeScript, Bun, Oxlint, and Tailwind CSS.

## Stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Features

- Fast Vite development server
- React + TypeScript setup
- SWC-powered React plugin
- Bun for package management and scripts
- Oxlint for linting
- Tailwind CSS v4 configured through the Vite plugin
- `@` path alias mapped to `src`

## Getting Started

### Install dependencies

```bash
bun install
```

### Start development server

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

## Scripts

```bash
bun run dev
bun run build
bun run preview
bun run lint
bun run lint:fix
bun run check
```

## Path Alias

This template includes the `@` alias for imports from `src` directory.

Example:

```tsx
import { cn } from "@/lib/cn";
```

## Styling

Tailwind CSS v4 is configured through the Vite plugin.

## Linting

Oxlint is used for fast linting.

```bash
bun run lint
```

## Type Checking

Run TypeScript checks manually with:

```bash
bun run check
```

## License

[MIT](LICENSE)
