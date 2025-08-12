import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#C9C9C9",
          100: "#b8b8b8",
          200: "#828282",
          300: "#696969",
          400: "#424242",
          500: "#3b3b3b",
          600: "#2e2e2e",
          700: "#242424",
          800: "#1f1f1f",
          900: "#141414",
        },
      },
    },
  },
} satisfies Config;
