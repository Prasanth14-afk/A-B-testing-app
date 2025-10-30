/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        brand: 'hsl(var(--brand))',
        'brand-light': 'hsl(var(--brand-light))',
        accent: 'hsl(var(--accent))',
        positive: 'hsl(var(--positive))',
        negative: 'hsl(var(--negative))',
        'ring-1': 'hsl(var(--ring-1))',
        'ring-2': 'hsl(var(--ring-2))',
        'ring-3': 'hsl(var(--ring-3))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
