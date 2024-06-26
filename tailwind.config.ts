import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ['Cactus Classical Serif', 'serif'],
        title: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
