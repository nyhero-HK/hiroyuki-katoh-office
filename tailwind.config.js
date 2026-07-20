/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ——— Academic Press palette (2026-07 redesign) ———
        // Warm paper ground. 50 is the page background; deeper steps for panels/rules.
        'washi': {
          50: '#FBF8F1',
          100: '#F6F0E3',
          200: '#EDE3CE',
          300: '#E0D2B4',
          400: '#CBB88F',
        },
        // Ink navy — primary text and structural rules.
        'ink': {
          50: '#F0F3F6',
          100: '#DCE3EA',
          200: '#B4C2D1',
          300: '#8299B0',
          400: '#54718E',
          500: '#35516C',
          600: '#264059',
          700: '#1C3247',
          800: '#142536',
          900: '#0E1B28',
        },
        // 朱 vermillion — the single loud accent: seal, links, active states.
        'shu': {
          50: '#FCF1EF',
          100: '#F8DCD8',
          200: '#EFB4AD',
          300: '#E3867C',
          400: '#D45C50',
          500: '#C73E3A', // 真朱
          600: '#A93331',
          700: '#872826',
          800: '#651E1D',
          900: '#471514',
        },
        // Muted gold ochre — fine rules, small ornaments only.
        'kin': {
          100: '#F1E8D2',
          300: '#D9C08A',
          500: '#B08D3E',
          700: '#7E6222',
        },

        // ——— Legacy neo-* palette (kept while inner pages migrate) ———
        'neo-teal': {
          50: '#f0f7f8',
          100: '#d9ebee',
          200: '#b3d6dc',
          300: '#7fb6c0',
          400: '#4d909d',
          500: '#0B5563',
          600: '#0A4A55',
          700: '#083D47',
          800: '#062E36',
          900: '#042228',
        },
        'neo-mint': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        'neo-coral': {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#FF6B6B',
          600: '#fa5252',
          700: '#f03e3e',
          800: '#e03131',
          900: '#c92a2a',
        },
        'neo-amber': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FBBF24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        // Editorial serif display: Fraunces for Latin, Noto Serif JP for kanji/kana.
        'display': ['Fraunces', '"Noto Serif JP"', '"Noto Serif JP Fallback"', 'serif'],
        // Body stays sans for JP readability (elderly patient audience on linked sites).
        'body': ['"Noto Sans JP"', '"Noto Sans JP Fallback"', 'Manrope', '"Manrope Fallback"', 'sans-serif'],
      },
      fontSize: {
        // Larger base + generous line-heights tuned for Japanese readability.
        'base': ['1.125rem', { lineHeight: '1.8' }],
        'lg': ['1.25rem', { lineHeight: '1.8' }],
        'xl': ['1.375rem', { lineHeight: '1.7' }],
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
