import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ink: "hsl(var(--ink))",
        brand: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "grid-fade": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "loader-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "ckm-draw": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "ping-once": {
          "0%": { transform: "scale(1)", opacity: "0.85" },
          "80%": { transform: "scale(6)", opacity: "0" },
          "100%": { transform: "scale(6)", opacity: "0" },
        },
        "glitch-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-1px, 1px)" },
          "40%": { transform: "translate(1px, -1px)" },
          "60%": { transform: "translate(-1px, 0)" },
          "80%": { transform: "translate(1px, 1px)" },
        },
        "pulse-sweep": {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(110%)" },
        },
        "scan-glow": {
          "0%, 100%": { opacity: "0", filter: "blur(6px)" },
          "45%, 55%": { opacity: "1", filter: "blur(0px)" },
        },
        "split-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "split-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "line-collapse": {
          "0%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(0)", opacity: "0" },
        },
        "knight-drop": {
          "0%": { transform: "translateY(-120%) scale(1.05)", opacity: "0" },
          "70%": { transform: "translateY(6%) scale(1)", opacity: "1" },
          "85%": { transform: "translateY(-2%) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "knight-impact": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(2px)" },
        },
        "sonar-ping": {
          "0%": { transform: "scale(0.2)", opacity: "0.9" },
          "100%": { transform: "scale(8)", opacity: "0" },
        },
        "grid-flash": {
          "0%, 100%": { opacity: "0.18" },
          "30%": { opacity: "1" },
        },
        "loader-slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "grid-fade": "grid-fade 0.8s ease-out both",
        "loader-out": "loader-out 0.4s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "ckm-draw": "ckm-draw 0.5s linear forwards",
        "ping-once": "ping-once 0.9s cubic-bezier(0, 0, 0.2, 1) forwards",
        "glitch-shift": "glitch-shift 0.18s steps(2, end) 3",
        "pulse-sweep": "pulse-sweep 0.55s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        "scan-glow": "scan-glow 0.55s ease-out forwards",
        "split-top": "split-top 0.55s cubic-bezier(0.76, 0, 0.24, 1) forwards",
        "split-bottom": "split-bottom 0.55s cubic-bezier(0.76, 0, 0.24, 1) forwards",
        "line-collapse": "line-collapse 0.35s ease-in forwards",
        "knight-drop": "knight-drop 0.55s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        "knight-impact": "knight-impact 0.18s ease-out forwards",
        "sonar-ping": "sonar-ping 0.85s cubic-bezier(0, 0, 0.2, 1) forwards",
        "grid-flash": "grid-flash 0.7s ease-out forwards",
        "loader-slide-up": "loader-slide-up 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
