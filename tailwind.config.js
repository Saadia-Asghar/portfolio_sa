/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Spider-Verse Palette
        "spider-black": "#050505",
        "spider-magenta": "#ff0055",
        "spider-cyan": "#00f3ff",
        "spider-yellow": "#f9ff00",
        "spider-purple": "#7a00ff",
      },
      fontFamily: {
        tech: ["Space Grotesk", "sans-serif"], // For Data Science/Tech
        accent: ["Permanent Marker", "cursive"], // For Creative/Design
      },
      animation: {
        // Snappy, jerky movement like the movie's 12fps style
        'glitch-fast': 'glitch 0.2s steps(2) infinite',
        'glitch-slow': 'glitch 3s steps(3) infinite',
        'chromatic': 'chromatic 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
          '40%': { transform: 'translate(-2px, -2px)', clipPath: 'inset(10% 0 30% 0)' },
          '60%': { transform: 'translate(2px, 2px)', filter: 'contrast(150%)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        chromatic: {
          '0%, 100%': { textShadow: '2px 0 #ff0055, -2px 0 #00f3ff' },
          '50%': { textShadow: '-2px 0 #ff0055, 2px 0 #00f3ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'halftone': "url('https://www.transparenttextures.com/patterns/stardust.png')", // Dot pattern overlay
      }
    },
  },
  plugins: [],
};
