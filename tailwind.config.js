/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#33385B',
        'azul-claro': '#6381C0',
        'azul-fundo': '#566E81',
        'branco': '#F2F2F2',
        'preto': '#202020',
        'cinza': '#C3C3C3',
        'cinza-claro': '#D9D9D9'
      },
      fontFamily:{
        'poppins': 'Poppins, sans-serif'
      },
      lineHeight:{
        'h1': '4.1rem'
      }
    },
  },
  plugins: [],
}