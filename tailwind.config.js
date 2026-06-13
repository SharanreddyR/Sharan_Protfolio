/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1A3A2B',
        moss: '#8FBC8F',
        sage: '#F4F9F5',
        mint: '#E8F3EA',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        leaf: '24px 4px 24px 4px',
        'leaf-sm': '16px 3px 16px 3px',
      },
      boxShadow: {
        leaf: '0 8px 32px rgba(26, 58, 43, 0.08)',
        'leaf-hover': '0 16px 48px rgba(26, 58, 43, 0.12)',
        glow: '0 0 40px rgba(143, 188, 143, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
