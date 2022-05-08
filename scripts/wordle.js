/* eslint-disable no-console */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
const fs = require("fs")
const axios = require("axios")

const BASE_URL = "https://www.nytimes.com/games/wordle/"

const MAIN_JS_REGEX = /main.\w+.js/
const WORD_LIST_REGEX = /Ma=[['",a-z]+]/ // Real Words

async function mainProcess () {
	let response
	try {
		response = await axios.get(BASE_URL + "index.html")
	} catch (err) {
		throw new Error("Failed to download index")
	}
	const mainName = MAIN_JS_REGEX.exec(response.data)[0]
	if (!mainName) {
		throw new Error("Unable to find main.js url")
	}
	try {
		console.log(mainName);
		response = await axios.get(BASE_URL + mainName)
	} catch (err) {
		throw new Error("Failed to download main.js")
	}
	
	const wl = WORD_LIST_REGEX.exec(response.data)
	if (!wl || !wl[0]) {
		throw new Error("Unable to find word list data")
	}
	const wordList = JSON.parse(wl[0].substring(3))
	fs.writeFile("./static/wordle_list.json", JSON.stringify(wordList), (err) => {
		if (err) {
			throw new Error(err)
		}
		console.log("Write to wordle_list successful")
	})
}
mainProcess()