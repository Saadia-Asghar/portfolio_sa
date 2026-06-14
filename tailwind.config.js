/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#fdfcfa',
        surface: '#ffffff',
        'accent-build': '#2d6a4f',
        'accent-grow': '#9a3412',
        'accent-design': '#5c4b8a',
        'book-ink': '#1a1a18',
        paper: '#fdfcfa',
        prism: {
          void: '#fdfcfa',
          glass: 'rgba(255, 255, 255, 0.8)',
          glow: '#8b3a4a',
        },
        'spider-black': '#1a1a18',
        'spider-cyan': '#2d6a4f',
        'spider-magenta': '#9a3412',
        'spider-yellow': '#5c4b8a',
        'spider-purple': '#5c4b8a',
      },
      fontFamily: {
        tech: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};
