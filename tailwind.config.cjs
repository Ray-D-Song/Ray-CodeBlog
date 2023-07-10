/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      width: {
        '50vw': "50vw",
        '30vw': "30vw",
        '60vw': "60vw",
        '65vw': "65vw",
        '70vw': '70vw',
        '80vw': '80vw',
        '85vw': '85vw',
        '90vw': '90vw',
        '95vw': '95vw'
      },
      minWidth: {
        '96': '24rem',
        '80': '20rem'
      }
    },
	},
	plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    themes: ["light", "night"]
  }
}
