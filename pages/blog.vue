<template>
  <div class="wrapper">
    <Logo addition="Blog" />
    <Navigation :links="links" />

    </br>

    <div v-for="post in posts" :key="post.id">
      <BlogCard :title="post.title" :content="post.content" :path="post.path" />
    </div>
  </div>
</template>

<script>
export default {
	data: () => {
		return {
			links: [
				{ name: "Home", path: "/", same: true }
			],

			posts: [
				{ path: "hello-world" }
			]
		}
	}
}
</script>
