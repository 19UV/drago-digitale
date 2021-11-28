export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	router: {
		base: "/drago-digitale/"
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Drago Digitale",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "author", name: "author", content: "19UV" },
			{ hid: "description", name: "description", content: "My personal blog; Programming, Graphics, etc" },
			{ name: "format-detection", content: "telephone=no" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/drago-digitale/favicon.ico" },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"@/static/style.css"
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module"
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/content
		"@nuxt/content",
		"@nuxtjs/sitemap"
	],

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},
	
	sitemap: {
		hostname: "http://drago-digitale.com"
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
