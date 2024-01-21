import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				brand: "#E54B4B",
			},
			transitionDuration: {
				"200": "200ms",
			},
			keyframes: {
				scroll: {
					to: { transform: "translate(calc(-50% - 2rem))" },
				},
			},
			animation: {
				scroll: "scroll 80s linear infinite",
			},
		},
	},
	plugins: [],
};
export default config;
