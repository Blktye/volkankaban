/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	},
	plugins: [
		require(
			"daisyui",
			"@tailwindcss/aspect-ratio",
			"prettier-plugin-tailwindcss",
			"tailwind-scrollbar-hide"
			),
	],
};