/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	},
	plugins: [
	  require('@tailwindcss/aspect-ratio'),
	  require("prettier-plugin-tailwindcss"),
	  require("tailwind-scrollbar-hide"),
	],
  };