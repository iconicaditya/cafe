import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // shadcn tokens (kept for compatibility)
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
        // Cafe brand palette — neutral, no warm tones
        cafe: {
          bg:           "#FFFFFF",
          "bg-alt":     "#F5F5F5",
          dark:         "#0A0A0A",
          brown:        "#1C1C1C",
          "brown-dark": "#0A0A0A",
          gold:         "#1C1C1C",
          beige:        "#EBEBEB",
          border:       "#E0E0E0",
          text:         "#0F0F0F",
          "text-muted": "#9E9E9E",
          "text-secondary": "#555555",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter:    ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "20px",
        "3xl": "24px",
      },
      maxWidth: {
        content: "1240px",
        site:    "1440px",
      },
      lineHeight: {
        relaxed: "1.7",
      },
      letterSpacing: {
        widest: "0.15em",
        cafe: "0.06em",
      },
      boxShadow: {
        "soft-sm": "0 2px 12px rgba(0,0,0,0.06)",
        soft:      "0 4px 24px rgba(0,0,0,0.08)",
        "soft-lg": "0 8px 40px rgba(0,0,0,0.10)",
        "soft-xl": "0 16px 64px rgba(0,0,0,0.12)",
        gold:      "0 8px 32px rgba(0,0,0,0.15)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "float":      "float 6s ease-in-out infinite",
        "spin-slow":  "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
