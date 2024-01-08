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
    boxShadow: {
      focusShadow: "0 0 5px 2px rgba(255,255,255,0.5)",
    },
    backgroundImage: {
      "hero-pattern": "url('/pattern-bg-desktop.png')",
      "hero-pattern-mobile": "url('/pattern-bg-mobile.png')",
    },
  },
  colors: {
    white: "#ffffff",
    "very-dark-gray": "hsl(0, 0%, 17%)",
    "dark-gray": "#545769",
  },
};
export const plugins = [];
