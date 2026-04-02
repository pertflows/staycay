/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      /* ── Brand tokens ── swap these when Britney's designer delivers ── */
      colors: {
        brand: {
          navy:       "var(--color-navy)",
          obsidian:   "var(--color-obsidian)",
          coral:      "var(--color-coral)",
          gold:       "var(--color-gold)",
          "gold-light":"var(--color-gold-light)",
          sand:       "var(--color-sand)",
          cream:      "var(--color-cream)",
          charcoal:   "var(--color-charcoal)",
          muted:      "var(--color-muted)",
          sage:       "var(--color-sage)",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Playfair Display", "serif"],
        body:    ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 8rem)",
      },
      borderRadius: {
        "brand": "0.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up":        "fade-up 0.7s ease-out forwards",
        "fade-in":        "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        "scale-in":       "scale-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
