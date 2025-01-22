import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "550px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        lightBlue: "#F5F8FB",
        darkBlue: "#1F2937",
        green: "#34C759",
        red: "#FF3B30",
        gray: "#9CA3AF",
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