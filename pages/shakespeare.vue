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
import markov_data from "~/static/shakespeare_chain.json"

function randomIn (array) {
	return array[Math.floor(Math.random() * array.length)]
}

export default {
	data: () => {
		return {
			links: [
				{ name: "Home", path: "/", same: true },
				{ name: "Article", path: "/articles/procedural-shakespeare", same: true }
			],
			...markov_data,
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
