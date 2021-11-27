<template>
	<NuxtLink :to="'/articles/' + path">
		<div class="blog_card">
			<h2>> {{ $fetchState.pending ? "Loading..." : title }}</h2>
			<p>{{ ($fetchState.pending && description) ? "..." : description }}</p>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	name: "BlogCard",
	props: ["path"],

	async fetch () {
		const { $content } = this.$nuxt
		const article = await $content("articles", this.path).fetch()
		console.log(article)

		this.title = article.title
		this.description = article.description
	},

	data: (t) => {
		return {
			title: "",
			description: ""
		}
	}
}
</script>
