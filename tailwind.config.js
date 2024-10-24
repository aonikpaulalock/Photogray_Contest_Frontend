import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        primary: '#001858',
        SecondPrimary: '#596ea8',
        secondary: '#F582AE',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/landingPage/HeroSection.png')",
        'footer-pattern': "url('/path/to/your/footer-image.png')",
      },
    },
  },
  plugins: [],
})