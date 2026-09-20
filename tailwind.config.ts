import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          50: '#f2f7f4',
          100: '#e0ebe4',
          200: '#c2d7cb',
          300: '#97b8a8',
          400: '#6a947f',
          500: '#4a7761',
          600: '#385f4c',
          700: '#2e4c3e',
          800: '#273e34',
          900: '#21342c',
          950: '#111c17',
        },
        flood: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdd88',
          300: '#ffc44a',
          400: '#ffab20',
          500: '#f98c07',
          600: '#dd6702',
          700: '#b74606',
          800: '#94350c',
          900: '#7a2c0d',
        },
        night: {
          50: '#f4f6f8',
          100: '#e3e8ed',
          200: '#c9d3dd',
          300: '#a4b4c4',
          400: '#7890a6',
          500: '#5d748b',
          600: '#4a5d72',
          700: '#3d4c5d',
          800: '#35414f',
          900: '#1a222c',
          950: '#0b1016',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
