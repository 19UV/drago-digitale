---
title: Wordle Solver
description: Better to spend hours automating something, than spending 15 seconds actually doing it.
date: 01/30/2022
links: [{name: "Live Demo", path: "/wordle_solver", same: true}]
---

## A Short Story
First off, where did [[Wordle]](https://www.powerlanguage.co.uk/wordle/) even come from? In one
day, I went from not knowing anything about it, to learning about it from my English teacher,
to my maths teacher telling us about him solving that day's wordle in 3 tries.

So after spending 15 seconds stairing at the screen, I got to work writing a program to play
it for me.

## Step 1: How Does Wordle Work?
Wordle is very interesting. You would assume that when you submit a word, it would send a
request to the central server for it to actually be checked. That way, you won't be able
to see the actual word before solving, and you won't be able to tell future words.

It doesn't work that way. It turns out that the word chosen is just selected from a word list,
and that word list (actually 2; one with actual words and another with strange words like "aahed")
is located in main.js. The selection also isn't even random, its based on the time. This means
that I can tell you the word on any given day after launch. This also means that I now have the
full word list (located [[here]](https://drago-digitale.com/wordle_list.json)).

I love security.

## Step 2: Implimenting the Solver
The solver should do three things on repeat. Output a word, get input, and remove all invalid words.
Starting out, we just take the word list found (see above) and print out a random word (I just use
the word at index 0 which just so happens to be cigar). We get the response
(a series of 5 green/yellow/grays), and filter our current word list respectively. Here is the logic.

For every green: Require that every word in the word list has that letter at the position of the
green in the guess.
For every yellow: Require that every word in the word list has that letter & isn't at the position
of yellow in the guess.
For every gray: First check to be sure that the corresponding letter isn't somewhere else in the guess
(in which case treat it like its yellow), if not, remove all words where that letter is present.

And then we just get input, and parse!

~ 19UV
