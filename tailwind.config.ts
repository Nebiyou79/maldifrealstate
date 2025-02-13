import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Example: Blue for elegance
        secondary: '#F97316', // Example: Orange for highlights
        accent: '#FACC15', // Example: Yellow for details
        background: '#F3F4F6', // Neutral background color
        text: '#1F2937', // Dark text color
      },
    },
  },
  plugins: [],
} satisfies Config;
