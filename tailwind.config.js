/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-dentista': "url('/assets/img/paciente-mujer-en-dentista.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        }

    },
  },
  plugins: [],
}
