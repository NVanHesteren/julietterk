import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage:  { DEFAULT: "#6F8666", deep: "#44553F", pale: "#E8EDE3" },
        cream: { DEFAULT: "#F7F3EC", deep: "#EBE5D6" },
        clay:  { DEFAULT: "#C97B5C", pale: "#F3DDD0" },
        ink:   { DEFAULT: "#1F1E1A", mid: "#5C5851", light: "#989289" },
      },
      fontFamily: {
        sans:  ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        wide:    "1200px",
        mid:     "980px",
        narrow:  "820px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
export default config;
