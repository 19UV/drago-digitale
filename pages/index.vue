<template>
  <div class="wrapper">
    <Logo />
    <Navigation :links="links" />
    </br>

    <div v-for="post in posts" :key="post.id">
      <BlogCard :title="post.title" :content="post.content" :path="post.path" />
    </div>

    <Socials />
  </div>
</template>

<script>
export default {
	data: () => {
		return {
			links: [
				{ name: "Source Code", path: "https://github.com/19UV/drago-digitale", external: true }
			],

			posts: [
				{ path: "hello-world" }
			]
		}
	}
}
</script>
