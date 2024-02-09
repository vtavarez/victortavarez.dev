import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      height: {
        'post-card': '230px',
      },
      maxWidth: {
        'post-card': '430px',
      },
      fontSize: {
        'responsive-heading': 'clamp(1.2rem, 3vw, 2rem)',
        'responsive-title': 'clamp(4.5rem, 16vw, 13rem)',
        'responsive-subtitle': 'clamp(1.4rem, 3vw, 2.5rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        project: '5px 5px 0px hsl(var(--primary))',
        outline: '0 0 0 3px hsl(var(--ring))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'scale-panel': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.25)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        },
        loader: {
          to: {
            opacity: '0.1',
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scale-panel': 'scale-panel 0.2s ease-in-out',
        marquee: 'marquee 120s linear infinite',
        loader: 'loader 0.6s infinite alternate',
        blink: 'blink 1s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
