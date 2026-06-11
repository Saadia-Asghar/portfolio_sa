/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0a0c12',
        surface: '#12151c',
        'accent-build': '#38bdf8',
        'accent-grow': '#f472b6',
        'accent-design': '#fbbf24',
        // legacy aliases used in data
        'spider-black': '#09090b',
        'spider-cyan': '#38bdf8',
        'spider-magenta': '#f472b6',
        'spider-yellow': '#fbbf24',
        'spider-purple': '#a78bfa',
      },
      fontFamily: {
        tech: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        doodle: ['"Caveat"', '"Patrick Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
};
