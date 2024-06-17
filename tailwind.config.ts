import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        // "2xl": "1400px",
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
    extend: {
      boxShadow: {
        'custom': '0px 8px 16px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        // main: "#d52028",
        main: "#f97316", // Main color CAK
        "my-main-gray": "#1b1b1bb3", // Main color CAK
        "my-main-cream": "#FFFBF4", // Main color CAK #fef5e6
        "my-border-color": "#C6BAB3", // Main color CAK
        "my-main-chestnut": "#fef5e6", // Main color CAK
        "my-bg-check": "#0bd8b6", // Main color CAK
        "my-main-check": "#008573", // Main color CAK
        "my-sub-title": "#7F8893", // Main color CAK
        "my-main-ads": "#F28500", // Main color CAK
        "my-ads-title": "#253746", // Main color CAK
        "my-linear-text-l": "#f97316", // Main color CAK
        "my-linear-text-r": "#fdbd00", // Main color CAK
        "my-bg-rounded": "#B1D8FC", // Main color CAK
        "my-dotted-color": "#BDCCCC", // Main color CAK
        "my-gray-color": "#7e7e7e", // Main color CAK

        "my-linear-text": {
          "background": "linear-gradient(to left, #f97316, #fdbd00)",
          "color": "transparent",
          "-webkit-background-clip": "text",
          "background-clip": "text",
        }, // Main color CAK
        
        "main-100": "#cf2e2e",
        "main-50": "#cf2e2e",
        "blue-default": "rgb(29, 36, 108)",
        "blue-default-50": "#0072bc",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "scale-inf": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        // This is my keyframes: brandsMove
        // "brandsMove": {
        //   "0%": { transform: "translateX(0%)" },
        //   "20%": { transform: "translateX(-25%)" },
        //   "40%": { transform: "translateX(-50%)" },
        //   "60%": { transform: "translateX(-75%)" },
        //   "80%": { transform: "translateX(-100%)" },
        //   "100%": { transform: "translateX(-125%)" },
        // },
        "brandsMove": {
          "0%": { transform: "translateX(-25%)" },
          "25%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(-68%)" },
          "100%": { transform: "translateX(-25%)" },
      }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-inf": "scale-inf 1s infinite",
        "my-brands-animate": "brandsMove 8s ease-in-out infinite"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
