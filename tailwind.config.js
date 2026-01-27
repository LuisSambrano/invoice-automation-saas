/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          foreground: "#ffffff",
          border: "rgba(255, 255, 255, 0.05)",
        },
        popover: {
          DEFAULT: "#0a0a0a",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          foreground: "rgba(255, 255, 255, 0.5)",
        },
        accent: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#FF453A",
          foreground: "#ffffff",
        },
        border: "rgba(255, 255, 255, 0.05)",
        input: "rgba(255, 255, 255, 0.05)",
        ring: "rgba(255, 255, 255, 0.2)",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
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
  plugins: [require("tailwindcss-animate")],
};
