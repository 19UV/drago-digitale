/* eslint-disable no-console */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */

const fs = require("fs")
const axios = require("axios")

const BASE_URL = "https://www.powerlanguage.co.uk/wordle/"
const MAIN_JS_REGEX = /main.\w+.js/
const WORD_LIST_LA_REGEX = /La=[['",a-z]+]/ // Real Words
const WORD_LIST_TA_REGEX = /Ta=[['",a-z]+]/ // Test Words

(async function () {
	let response
	try {
		response = await axios.get(BASE_URL)
	} catch (err) {
		throw new Error("Failed to download index")
	}

	const mainName = MAIN_JS_REGEX.exec(response.data)[0]
	if (!mainName) {
		throw new Error("Unable to find main.js url")
	}

	try {
		response = await axios.get(BASE_URL + mainName)
	} catch (err) {
		throw new Error("Failed to download main.js")
	}

	const wlTa = WORD_LIST_TA_REGEX.exec(response.data)
	const wlLa = WORD_LIST_LA_REGEX.exec(response.data)
	if (!wlTa || !wlLa || !wlTa[0] || !wlLa[0]) {
		throw new Error("Unable to find word list data")
	}

	const wordList = JSON.parse(wlLa[0].substring(3))

	fs.writeFile("./static/wordle_list.json", JSON.stringify(wordList), (err) => {
		if (err) {
			throw new Error(err)
		}
		console.log("Write to wordle_list successful")
	})
})()
