<template>
  <div
    class="wrapper"
    @keydown.a="handle_green"
    @keydown.b="handle_yellow"
    @keydown.c="handle_gray"
    @keydown.enter="handle_newline"
    @keydown.delete="handle_backspace"
  >
    <Logo addition="Wordle Solver" />
    <Navigation :links="links" />

    <section>
      <article>
        <p>Remaining: {{ remaining_words }}</p>
        <table class="noselect">
          <tr v-for="(row, y) in board" :key="y">
            <td v-for="(tile, x) in board[y]" :key="x" :class="'board-tile ' + tile.className">
              {{ tile.char }}
            </td>
          </tr>
        </table>
      </article>
      <aside>
        <h3>Usage</h3>
        <p>This app will generate a word, which you can plug into Wordle to get the response. The response can be given to this app, and it will try and generate the next best (or good) word.</p>

        <p>By just typing in a letter (A, B, or C), the letter will show up on the grid. A is for green, B for yellow, and C for gray. You can use backspace, and enter once you've entered in all 5 letters. Be sure that you enter them in correctly, or it won't give a good answer.</p>

        <p><b>Note:</b> Entering in AAAAA will clear the board</p>
      </aside>
    </section>
  </div>
</template>

<script>
import wordleList from "~/static/wordle_list.json"

const CLASS_LOOKUP = ["letter-absent", "letter-gray", "letter-yellow", "letter-green"]
const TILE_CHARS = [" ", "C", "B", "A"]
const TILE_STATE = {
	EMPTY: 0,
	GRAY: 1,
	YELLOW: 2,
	GREEN: 3
}

class Guesser {
	constructor (wordList) {
		this.current_list = [...wordList]
	}

	reset (wordList) {
		this.previous_guess = undefined
		this.current_list = [...wordList]
	}

	getListLength () {
		return this.current_list.length
	}

	guess (response) {
		if (this.previous_guess) {
			if (response.length !== 5) {
				throw new Error("Invalid Input Length")
			}
			// Wordle will give a gray square if it has already given a green
			// or yellow square for that letter, so we'll need to replace the
			// gray squares with yellow.
			response = response.split("") // Why are strings immutable?
			for (let i = 0; i < 5; i++) {
				if (response[i] !== "C") {
					continue
				}

				for (let j = 0; j < 5; j++) {
					if ((j === i) || (response[j] === "C")) {
						continue
					}

					if (this.previous_guess[j] === this.previous_guess[i]) {
						response[i] = "B"
						break
					}
				}
			}
			response = response.join("")

			// Actually remove invalid words
			for (let i = 0; i < 5; i++) {
				const currChar = this.previous_guess[i]

				switch (response[i]) {
				case "A":
					this.forceAt(currChar, i)
					break
				case "B":
					this.removeAt(currChar, i)
					this.require(currChar)
					break
				case "C":
					this.removeAll(currChar)
					break
				}
			}
		}

		this.previous_guess = this.current_list[0]
		return this.previous_guess
	}

	forceAt (char, index) {
		this.current_list = this.current_list.filter(x => x[index] === char)
	}

	removeAt (char, index) {
		this.current_list = this.current_list.filter(x => x[index] !== char)
	}

	removeAll (char) {
		this.current_list = this.current_list.filter(x => !(x.includes(char)))
	}

	require (char) {
		this.current_list = this.current_list.filter(x => x.includes(char))
	}
}

export default {
	data: () => {
		return {
			board: [],
			links: [
				{ name: "Home", path: "/", same: true },
				{ name: "Article", path: "/articles/wordle-solver", same: true }
			],

			mouse: { x: 0, y: 0 },
			current_response: "",
			remaining_words: Infinity,
			guesser: undefined
		}
	},

	mounted () {
		this.guesser = new Guesser(wordleList)
		this.remaining_words = this.guesser.getListLength()

		this.board = []
		for (let y = 0; y < 6; y++) {
			this.board.push([])
			for (let x = 0; x < 5; x++) {
				this.board[y].push({
					char: " ",
					className: "letter-absent",
					state: TILE_STATE.EMPTY
				})
			}
		}
		window.addEventListener("keydown", (e) => {
			const key = String.fromCharCode(e.which || e.keyCode).toLowerCase()
			switch (key) {
			case "a": case "A":
				this.handle_green()
				break
			case "b": case "B":
				this.handle_yellow()
				break
			case "c": case "C":
				this.handle_gray()
				break
			case "\b":
				this.handle_backspace()
				break
			case "\r": case "\n":
				this.handle_newline()
				break
			}
		})
		this.write_text(0, this.guesser.guess())
	},

	methods: {
		reset () {
			this.mouse = { x: 0, y: 0 }
			this.guesser.reset(wordleList)
			this.remaining_words = this.guesser.getListLength()

			for (let y = 0; y < 6; y++) {
				this.write_text(y, "     ")
				for (let x = 0; x < 5; x++) {
					this.set_background(y, x, TILE_STATE.EMPTY)
				}
			}

			this.write_text(0, this.guesser.guess())
		},

		write_text (y, str) {
			for (let i = 0; i < 5; i++) {
				this.board[y][i].char = str[i] || " "
			}
		},

		set_background (y, x, state) {
			if ((x < 0) || (x >= 5) || (y < 0) || (y >= 6)) {
				return
			}

			this.board[y][x].state = state
			this.board[y][x].className = CLASS_LOOKUP[state]
		},

		handle_green () {
			if (this.mouse.x < 5) {
				this.set_background(this.mouse.y, this.mouse.x, TILE_STATE.GREEN)
				this.mouse.x++
			}
		},

		handle_yellow () {
			if (this.mouse.x < 5) {
				this.set_background(this.mouse.y, this.mouse.x, TILE_STATE.YELLOW)
				this.mouse.x++
			}
		},

		handle_gray () {
			if (this.mouse.x < 5) {
				this.set_background(this.mouse.y, this.mouse.x, TILE_STATE.GRAY)
				this.mouse.x++
			}
		},

		handle_backspace () {
			if (this.mouse.x > 0) {
				this.mouse.x--
				this.set_background(this.mouse.y, this.mouse.x + 1, TILE_STATE.EMPTY)
			}
			this.set_background(this.mouse.y, this.mouse.x, TILE_STATE.EMPTY)
		},

		handle_newline () {
			if (this.mouse.x === 5) {
				this.set_background(this.mouse.y, this.mouse.x, TILE_STATE.EMPTY)

				let res = ""
				for (let i = 0; i < 5; i++) {
					res += TILE_CHARS[this.board[this.mouse.y][i].state]
				}
				if (res === "AAAAA") {
					this.reset()
					return
				}
				if (this.guesser) {
					const guessString = this.guesser.guess(res)
					if (!guessString) {
						this.reset()
						alert("Error: No possible words; Check for invalid inputs")
						return
					}
					this.remaining_words = this.guesser.getListLength()
					this.write_text(this.mouse.y + 1, guessString)
				}

				this.mouse.y++
				this.mouse.x = 0
			}
		}
	}
}
</script>

<style>
.board-tile {
  align-items: center;
  text-align: center;
  width: 2ch;
  height: 2ch;

  border: 3px solid #32936F;

  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;

  /* color: #32936F; */
  color: #0D0C1D;
}

.letter-absent { background-color: white; }
.letter-gray { background-color: #AFC2D5; }
.letter-yellow { background-color: #F18F01; }
.letter-green { background-color: #32936F; }

section {
  display: -webkit-box;  /* iOS 6-, Safari 3.1-6 */
  display: -moz-box;     /* Firefox 19- (buggy) */
  display: -ms-flexbox;  /* IE 10 */
  display: -webkit-flex; /* Chrome */
  display: flex;
}

article {
 -webkit-box-flex: 1; /* iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1;   /* Firefox 19- */
  -webkit-flex: 1;    /* Chrome */
  -ms-flex: 1;        /* IE 10 */
  flex: 1;
}

table {
  margin: 0 auto;
}

aside {
 -webkit-box-flex: 1; /* iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1;   /* Firefox 19- */
  -webkit-flex: 1;    /* Chrome */
  -ms-flex: 1;        /* IE 10 */
  flex: 1;
}
</style>
