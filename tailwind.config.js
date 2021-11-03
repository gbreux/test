module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			minHeight: {
				fullScreen: "100vh",
			},
			keyframes: {
				spin: {
					"0%": { transform: "rotate(0)" },
					"100%": { transform: "rotate(360deg)" },
				},
				spinReverse: {
					"0%": { transform: "rotate(360deg)" },
					"100%": { transform: "rotate(0)" },
				},
			},
			animation: {
				spin: "spin 2s linear infinite",
				spinReverse: "spinReverse 2s linear infinite",
			},
		},
	},
	variants: {
		extend: {
			zIndex: ["hover", "focus"],
		},
	},
	plugins: [],
};
