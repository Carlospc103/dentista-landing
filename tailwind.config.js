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
        },
        colors: {
        azul: '#0071b2',
        gris: '#64748b',
        azulBorder: '#b3d3e6',
        azulfondo: '#C0DAE5',
        blancoBody: '#f0f2f5',
        grisInput: '#6B7280',
        azulHover: '#005f93',
        blancoInput: '#e0e0e0',
      },
    },
  },
  plugins: [],
}
