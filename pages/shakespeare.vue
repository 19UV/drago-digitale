<template>
  <div class="wrapper">
    <Logo addition="Procedural Shakespeare" />
    <Navigation :links="links" />

    </br>

    <h3 style="text-align: center">
      "{{ quote }}" ~ Shakespeare Maybe
    </h3>

    </br>

    <button class="noselect" @click="generateShakespeare">
      Generate
    </button>
  </div>
</template>

<script>
function randomIn (array) {
	return array[Math.floor(Math.random() * array.length)]
}

export default {
	async asyncData ({ $axios }) {
		const response = await $axios.$get("./shakespeare_chain.json")
		if (!response) {
			throw new Error("Unable to Retrieve Sonnets")
		}
		const { chain, starters } = response

		return { chain, starters }
	},

	data: () => {
		return {
			links: [
				{ name: "Home", path: "/", same: true },
				{ name: "Article", path: "/articles/procedural-shakespeare", same: true }
			],
			quote: ""
		}
	},

	mounted () {
		this.generateShakespeare()
	},

	methods: {
		generateShakespeare () {
			let curr
			let line = ""
			for (curr = randomIn(this.starters); curr in this.chain; curr = randomIn(this.chain[curr])) {
				line += (line ? " " : "") + curr
			}
			line += (line ? " " : "") + curr
			this.quote = line
		}
	}
}
</script>
