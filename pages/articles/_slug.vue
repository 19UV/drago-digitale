<template>
  <div class="wrapper">
    <div class="heading">
      <h1>> {{ article.title }}</h1>
      <p><i>&emsp; {{ article.date }}</i></p>
    </div>
    <Navigation :links="links" />

    </br>

    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
	async asyncData ({ $content, params }) {
		const article = await $content("articles", params.slug).fetch()

		return { article }
	},

	data: () => {
		return {
			links: [
				{ name: "Home", path: "/", same: true },
				{ name: "Blog Posts", path: "/blog", same: true }
			]
		}
	}
}
</script>
