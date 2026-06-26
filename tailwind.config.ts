import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F1B2D',
        slate: '#2A3A4A',
        mist: '#F6F7F9',
        sea: '#6AA6B9',
        teal: '#3D7C8A',
        sand: '#E8E0D7',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 27, 45, 0.12)',
        card: '0 10px 24px rgba(15, 27, 45, 0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 20% 20%, rgba(106, 166, 185, 0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(61, 124, 138, 0.14), transparent 45%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
