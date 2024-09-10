/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
  	extend:{
		colors:{
			"primary": "#787486",
			"secondary":"#F5F5F5"
		}
	}
  },
  plugins: [require("tailwindcss-animate")],
}

