import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mind-blue': '#293991',
        'eclipse-purple': '#A7B4FF'
      },
      fontFamily: {
        markazi: ['"Markazi Text"'],
        offside: ['Offside'],
        kadwa: ['Kadwa']
      }
    },
  },
  plugins: [],
};
export default config;
