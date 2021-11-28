<template>
  <ul class="nav">
    <li v-for="item in links" :key="item.id">
      <a v-if="item.external" :href="item.path" rel="noreferrer" :target="item.same ? '_self' : '_blank'">
        [{{ item.name }}]
      </a>
      <NuxtLink v-else :to="item.path">
        [{{ item.name }}]
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
	name: "Navigation",
	props: {
		links: {
			type: Array,
			default: () => {
				return [
					{ name: "Home", path: "/", same: true }
				]
			}
		}
	}
}
</script>
