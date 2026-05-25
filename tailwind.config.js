    /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#FAF7F2',
        'warm-white': '#FEFDF9',
        blush:  '#F2D4CC',
        peach:  '#E8B89A',
        choco: {
          50:  '#FDF6F0',
          100: '#F0D9C8',
          200: '#D4A589',
          500: '#8B4513',
          700: '#3D1F0D',
          900: '#2A1208',
        },
        gold: {
          100: '#F5E9D0',
          300: '#E8C285',
          500: '#C9944A',
          700: '#A07832',
        },
        rose:   '#D4907A',
        sage:   '#9CAF9C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};