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
        'mobile': '480px',    // Custom name for mobile devices
        'tablet': '640px',    // Custom name for tablets
        'smallLaptop': '768px', // Custom name for small laptops
        'laptop': '1024px',
       // Custom name for laptops
        'desktop': '1280px',  // Custom name for desktops
        'largeDesktop': '1536px',
         // Custom name for large desktops
        'extraLargeDesktop': '1600px', // Custom name for extra large desktops
      },
    },
  },
  plugins: [],
}
