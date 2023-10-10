/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'inter': ['Inter'],
      },
      colors: {
        'cdn-red': '#F45050',
        'cdn-yellow': '#F9D949',
        'hero-card-color': '#d9d9d98c',
        'cdn-footer-color': '#3C486B',
      },
      backgroundImage: {
        'hero-banner': "url('/public/images/herobanner.png')"
      },
      screens: {
        'lgtablet': '940px',
        // => @media (min-width: 940px) { ... }
        'lgmobiles': '425px',
        // => @media (min-width: 425px) { ... }

        'mdmobiles': '375px',
        // => @media (min-width: 375px) { ... }

        'smmobiles': '320px',
        // => @media (min-width: 320px) { ... }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'main-grid': '1fr 3fr',


      },
    },
  },
  plugins: [],
}

