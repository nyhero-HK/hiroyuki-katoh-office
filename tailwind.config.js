/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ——— Semantic surface tokens (2026-09 Nocturne) ———
        // Colours are named by ROLE, not by hue, and resolve through CSS custom
        // properties. A section marked `.on-plate` re-declares every role, so the
        // same markup reads correctly on the dark ground and on a lit plate.
        // Palette values live in src/index.css.
        ground:        'rgb(var(--ground) / <alpha-value>)',
        surface:       'rgb(var(--surface) / <alpha-value>)',
        'surface-2':   'rgb(var(--surface-2) / <alpha-value>)',
        line:          'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
        content:       'rgb(var(--content) / <alpha-value>)',
        'content-2':   'rgb(var(--content-2) / <alpha-value>)',
        'content-3':   'rgb(var(--content-3) / <alpha-value>)',
        'content-4':   'rgb(var(--content-4) / <alpha-value>)',
        accent:        'rgb(var(--accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--accent-soft) / <alpha-value>)',
        'accent-ink':  'rgb(var(--accent-ink) / <alpha-value>)',
      },
      fontFamily: {
        // Editorial serif display: Fraunces for Latin, Noto Serif JP for kanji/kana.
        'display': ['Fraunces', '"Noto Serif JP"', '"Noto Serif JP Fallback"', 'serif'],
        // Body stays sans for JP readability (elderly patient audience on linked sites).
        'body': ['"Noto Sans JP"', '"Noto Sans JP Fallback"', 'Manrope', '"Manrope Fallback"', 'sans-serif'],
      },
      fontSize: {
        // Standard sizes with generous line-heights tuned for Japanese readability.
        // (2026-07: stepped back down from the enlarged 18px base per Hiro's review.)
        'base': ['1rem', { lineHeight: '1.8' }],
        'lg': ['1.125rem', { lineHeight: '1.8' }],
        'xl': ['1.25rem', { lineHeight: '1.7' }],
        '2xl': ['1.625rem', { lineHeight: '1.5' }],
        '3xl': ['2rem', { lineHeight: '1.4' }],
        '4xl': ['2.5rem', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        'label': '0.18em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
