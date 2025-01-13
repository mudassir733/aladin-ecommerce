/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-900)",
        neutral: "var(--neutral-400)",
        neutralMedium: "var(--neutral-400)",
        primaryMedium: "var(--primary-600)",
        primaryLight: "var(--primary-700)",
        secondary: "var(--secondary-100)",
        white: "var(--secondary-00)",
        primaryExtraLight: "var(--primary-400)"
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};
