export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"primary": "#1C222A",
				"accent": "#86344D", 
				"link": "#531515",
			},
			fontFamily: {
				sans: ["Work Sans Variable", "Work Sans", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono Variable", "JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
