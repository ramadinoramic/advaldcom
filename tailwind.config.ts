import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        ink: '#0A0A0A',
        muted: '#6B6B66',
        rule: '#E8E6DF',
        accent: '#1F3A2E',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'caption': '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
