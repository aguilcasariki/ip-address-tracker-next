/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "hero-pattern": "url('/pattern-bg-desktop.png')",
      "hero-pattern-mobile": "url('/pattern-bg-mobile.png')",
    },
  },
  colors: {
    white: "#ffffff",
    "very-dark-gray": "hsl(0, 0%, 17%)",
    "dark-gray": "hsl(0, 0%, 59%)",
  },
};
export const plugins = [];
