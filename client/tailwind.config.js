module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      mitr: ["Mitr", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  // , require("daisyui")
};

// module.exports = withMT({
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "./path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//     fontFamily: {
//       mitr: ["Mitr", "sans-serif"],
//     },
//   },
//   plugins: [require("flowbite/plugin")],
// });
