# vite-template

Vite + React + TypeScript + Tailwind CSS v4 starter with a set of ready-made UI components.

## Stack

- Vite 8, React 19, TypeScript 7
- Tailwind CSS v4 with a dark-only color token set (`src/index.css`)
- [Base UI](https://base-ui.com) headless primitives, [Phosphor](https://phosphoricons.com) icons
- oxlint
- bun

## Getting started

```sh
bunx degit ChillWoW/vite-template my-app
cd my-app
bun install
bun run dev
```

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `bun run dev`     | Start the dev server (port 3000) |
| `bun run build`   | Typecheck and build to `build/`  |
| `bun run lint`    | Lint with oxlint                 |
| `bun run preview` | Preview the production build     |

## Structure

```
src/
  ui/         UI components, imported via "./ui"
  lib/cn.ts   class name helper (clsx + tailwind-merge)
  App.tsx     app entry point
  main.tsx    root render + providers (Tooltip, ModalStack)
  index.css   Tailwind import + theme tokens
```

## Components

Autocomplete, Button, Checkbox, Collapsible, ContextMenu, Field, Input, Kbd, Menu, Modal, ModalStack, NumberField, Popover, Portal, Radio, SegmentedControl, Select, Separator, Skeleton, Slider, Spinner, Switch, Textarea, Toggle, Tooltip.

```tsx
import { Button } from "./ui";
```

## License

[MIT](LICENSE)
