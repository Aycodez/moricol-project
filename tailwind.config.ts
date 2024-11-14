import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#FDF5E8",
        "primary-100": "#F9EBD0",
        "primary-300": "#EEC271",
        "primary-400": "#E8AE42",
        "primary-500": "#E29A13",
        "primary-600": "#AA740E",
        "primary-700": "#714D0A",
        "secondary-50": "#FCE8E6",
        "secondary-300": "#E87167",
        "secondary-400": "#E04235",
        "secondary-500": "#D81302",
        "secondary-600": "#A20E02",
        "warning-500": "#CA8A04",
        "success-500": "#22C55E",
      },
      fontSize: {
        xxs: "0.638rem",
        "5.5xl": "3.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
export default config;
