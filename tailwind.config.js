/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: 'oklch(0.97 0.02 250)',
          100: 'oklch(0.93 0.05 250)',
          200: 'oklch(0.86 0.09 250)',
          300: 'oklch(0.76 0.14 252)',
          400: 'oklch(0.66 0.18 253)',
          500: 'oklch(0.56 0.20 254)',
          600: 'oklch(0.49 0.21 255)', // Primary professional blue
          700: 'oklch(0.42 0.20 256)',
          800: 'oklch(0.34 0.17 258)',
          900: 'oklch(0.24 0.13 260)',
        },
        support: {
          50: 'oklch(0.97 0.03 145)',
          100: 'oklch(0.93 0.06 145)',
          200: 'oklch(0.85 0.11 145)',
          500: 'oklch(0.68 0.17 145)',
          600: 'oklch(0.58 0.18 145)', // Secondary green
          700: 'oklch(0.48 0.16 145)',
        },
        accent: {
          50: 'oklch(0.98 0.02 350)',
          100: 'oklch(0.94 0.05 350)',
          200: 'oklch(0.88 0.09 350)',
          500: 'oklch(0.72 0.14 350)', // Soft pink accent
          600: 'oklch(0.65 0.15 350)',
        },
        surface: {
          base: 'oklch(0.99 0.003 250)',
          card: '#ffffff',
          muted: 'oklch(0.975 0.005 250)',
          border: 'oklch(0.91 0.01 250)',
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'elevated': '0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
