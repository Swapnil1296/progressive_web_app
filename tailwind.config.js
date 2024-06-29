/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smallMobile':'360px',
        'mobile': '480px',
        'tablet': '640px',
        'smallLaptop': '768px', 
        'laptop': '1024px',

        'desktop': '1280px',  
        'largeDesktop': '1536px',

        'extraLargeDesktop': '1600px', 
      },
    },
  },
  plugins: [],
}
