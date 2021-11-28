<template>
  <div class="wrapper">
    <Logo />
    <Navigation :links="links" />

    <h2>Hello World!</h2>
  </div>
</template>

<script>
export default {
	data: () => {
		return {
			links: [
				{ name: "Blog Posts", path: "/blog", same: true },
				{ name: "Source Code", path: "https://github.com/19UV/drago-digitale", external: true }
			]
		}
	}
}
</script>
