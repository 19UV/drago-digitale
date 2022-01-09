export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	env: {
		NODE_ENV: process.env.GITHUB_ACTIONS ? "production" : "development"
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
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" },
			{
				rel: "stylesheet",
				href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
				integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
				crossorigin: "anynymous"
			}
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
		"@nuxtjs/sitemap",
		"@nuxtjs/axios"
	],

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {
		markdown: {
			prism: {
				theme: "prism-themes/themes/prism-dracula.css"
			}
		}
	},

	sitemap: {
		hostname: "https://drago-digitale.com",
		routes: [
			"/articles/hello-world",
			"/articles/procedural-shakespeare"
		]
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
