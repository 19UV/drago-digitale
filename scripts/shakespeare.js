/* eslint-disable no-console */

const fs = require("fs")
const axios = require("axios")

const URL = "https://www.gutenberg.org/cache/epub/1041/pg1041.txt"
const SAMPLE_SIZE = 2

function isRomanNumeral (line) {
	const numerals = ["I", "V", "X", "L", "C", "D", "M"]
	for (let i = 0; i < line.length; i++) {
		if (!numerals.includes(line[i])) {
			return false
		}
	}
	return true
}

const chain = {}; const starters = [];
(async function () {
	const response = await axios.get(URL)
	if (response.status !== 200) {
		throw new Error("Non 200 Status Code")
	}
	const data = response.data.split("\n")

	const exclude = ["THE SONNETS", "by William Shakespeare"]

	let reading = false

	data.forEach((line) => {
		line = line.trim()

		if (line.length === 0) {
			return
		}
		if (line === "*** START OF THE PROJECT GUTENBERG EBOOK THE SONNETS ***") {
			reading = true
			return
		}
		if (line === "*** END OF THE PROJECT GUTENBERG EBOOK THE SONNETS ***") {
			reading = false
			return
		}

		if (reading) {
			if (exclude.includes(line) || isRomanNumeral(line)) {
				return
			}
			line = line.split(" ")

			starters.push(line.slice(0, SAMPLE_SIZE).join(" "))
			for (let i = 0; i < line.length; i += SAMPLE_SIZE) {
				const words = line.slice(i, i + SAMPLE_SIZE).join(" ")

				if (line[i + SAMPLE_SIZE]) {
					const next = line.slice(i + SAMPLE_SIZE, i + SAMPLE_SIZE + SAMPLE_SIZE).join(" ")

					if (words in chain) {
						chain[words].push(next)
					} else {
						chain[words] = [next]
					}
				}
			}
		}
	})

	fs.writeFile("./static/shakespeare_chain.json", JSON.stringify({
		length: SAMPLE_SIZE,
		starters,
		chain
	}), "utf8", (err) => {
		if (err) {
			throw new Error(err)
		}
		console.log("Write to chain.json Successful")
	})
})()
