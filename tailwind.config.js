/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surfaceAlt)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accentHover)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-textMuted)',
        'canvas-bg': 'var(--color-canvasBg)',
      },
      fontFamily: {
        theme: ['var(--font-family)', 'serif'],
      },
      boxShadow: {
        'brass': '0 0 0 1px var(--color-border), 0 2px 8px rgba(0,0,0,0.5)',
        'brass-inset': 'inset 0 1px 3px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(200,134,10,0.2)',
        'glow-accent': '0 0 12px var(--color-accent)',
      },
    },
  },
  plugins: [],
}
