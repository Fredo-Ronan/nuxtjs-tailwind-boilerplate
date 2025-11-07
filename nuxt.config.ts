// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		"@nuxt/eslint",
	],
	pages: true,
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
	nitro: {
		// Ensure Prisma Client runtime files are included in the build
		// explicit Rollup external to stop it trying to resolve ".prisma" as a package
		rollupConfig: {
			external: ['@prisma/client', '.prisma/client'],
		},

		// ensure @prisma/client runtime is not tree-shaken
		moduleSideEffects: ['@prisma/client'],

		// keep externals config basic - don't inline .prisma
		externals: {
			inline: [], // do not inline @prisma/client or .prisma
			external: ['@prisma/client', '.prisma/client'],
		},
	},
	runtimeConfig: {
		databaseUrl: process.env.DATABASE_URL,
	},
});
