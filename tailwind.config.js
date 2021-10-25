module.exports = {
   mode: "jit",
   purge: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./page-components/**/*.{js,ts,jsx,tsx}",
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {},
      container: {
         padding: "0.75rem",
      },
   },
   variants: {
      extend: {},
      margin: ["responsive", "hover"],
   },
   plugins: [],
};
