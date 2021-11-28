<template>
  <a :href="'/drago-digitale/articles/' + path + '/'">
    <div class="blog_card">
      <h2>> {{ $fetchState.pending ? "Loading..." : title }}</h2>
      <p>{{ ($fetchState.pending && description) ? "..." : description }}</p>
    </div>
  </a>
</template>

<script>
export default {
	name: "BlogCard",
	props: {
		path: {
			type: String,
			default: ""
		}
	},

	data: (t) => {
		return {
			title: "",
			description: ""
		}
	},

	async fetch () {
		if (this.path === "") {
			this.title = "<TEMPORARY TITLE>"
			this.description = "Lorem Ipsum"
			return
		}

		const { $content } = this.$nuxt
		const article = await $content("articles", this.path).fetch()

		this.title = article.title
		this.description = article.description
	}
}
</script>
