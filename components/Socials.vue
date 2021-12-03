<template>
  <ul class="nav">
    <li v-for="item in links" :key="item.id">
      <a :href="item.url" :title="item.title" rel="noreferrer" target="_blank">
        <span :class="item.class" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
	name: "Socials",
	data: () => {
		return {
			links: [
				{ url: "https://github.com/19UV", title: "Github", class: "fab fa-github fa-2x" },
				{ url: "https://www.youtube.com/channel/UCNfJRWwvwTHmXb8PXGw2BYQ", title: "Youtube", class: "fab fa-youtube fa-2x" }
			]
		}
	}
}
</script>
