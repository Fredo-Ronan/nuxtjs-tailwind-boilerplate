// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		"@nuxt/eslint",
	],
	devtools: { enabled: true },
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	tailwindcss: {
		cssPath: "./app/assets/css/tailwind.css",
		config: {},
		viewer: {
			endpoint: "/_tailwind",
			exportViewer: true,
		},
		exposeConfig: false,
	},
});
