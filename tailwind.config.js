/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',

        background: 'var(--color-background)',
        'background-variant': 'var(--color-background-variant)',
        surface: 'var(--color-surface)',

        // ✅ Card colors
        card: 'var(--color-card)',
        'card-alt': 'var(--color-card-alt)',

        // ✅ Accent (subtle premium taste, optional)
        'accent-blue': 'var(--color-accent-blue)',
        'accent-purple': 'var(--color-accent-purple)',

        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
        },

        border: 'var(--color-border)',
      },

      backgroundImage: {
        // ✅ Gradient card variant
        'card-gradient': 'linear-gradient(145deg, var(--color-background), var(--color-background-variant))'
      },

      keyframes: {
        typing: {
          '0%':{width:'0%'},
          '100%': {width: '100%'}
        },
        blink:{
          '50%':{borderColor: 'transparent'}
        }
      },

      animation: {
        typing: 'typing 2.5s steps(30, end)',
        blink: 'blink .7s step-end infinite'
      }
    },
  },
  plugins: [],
}