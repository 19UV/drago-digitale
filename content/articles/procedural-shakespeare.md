---
title: Procedural Shakespeare
description: Making a program write Shakespeare to annoy my English teacher.
date: 01/09/2022
links: [{name: "Live Demo", path: "/shakespeare", same: true}]
---

## A Short Story
While binging Youtube, and procrastinating on doing German homework, I saw
the following video by one of the developers of [[Caves of Qud]](https://www.cavesofqud.com/).
He discusses how they procedurally generate books (text) that look like
English, but have little to no meaning.

<div class="video_wrapper">
	<iframe src="https://www.youtube.com/embed/3AjlsTtrfVY"
			title="YouTube video player" frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen>
	</iframe>
</div>

What text also looks like English, but also has little to no meaning?
Exactly! Shakespeare!

So my project for the month is to generate Shakespeare-isk text using Markov
chains, and hopefully get it to a point where it looks similar to actual Shakespeare.

## Step 1: A Bloated Dataset
History Lesson: Shakespeare wrote plays and poetry. Plays consisted of
Comedy (ex. All's Well That Ends Well), History (ex. Henry IV), and Tragedy
(ex. Romeo and Juliet, Macbeth, and Hamlet). He also wrote poetry. For now,
I'm just using Shakespeare's Sonnets [[on Project Gutenberg]](https://www.gutenberg.org/ebooks/1041).
In the future, I may also add in his other poems (or add in his plays).

The final generator will not be able to generate full sonnets, because there are
various restraints that I can't easily impliment (14 lines, 10 syllables per line,
iambic pentameter, etc). But it should be able to produce vaguely understandable
english text (like William Shakespeare).

## Step 2: A Sleep Deprived Rampage
I used a method practically identical to that in the talk linked above. Going
through every line in the poem, I found each 'phrase'. Every phrase is a number
'n' number of words long (n=1 - 1 word, n=2 - 2 words). A shorter n (1) will
cause it to be less likely to the text, and therefore more likely to have a
unique result. A larger n, will make it less unique, but more likely to actually
follow some rules of grammar.

This took several hours.

But it works. The final result can be seen here: [[Live Demo]](/shakespeare).

The one major problem is that it sometimes generates existing quotes. This will
happen if it follows only existing links in the Markov chain.

## Extra: Neat Stuff

### Shakespeare's Funnies Fake Words
*"Without all ornament, itself and true, have often liv’d alone,"*

*"To eat the world’s due, by the grave where buried love doth live,"*

*"So true a fool is love, that in thee are seen,"*

*"Yet what of thee thy poet doth invent,"*

### Shakespeare's Most Common Words
So I ran a frequency analysis on Shakespeare's sonnets, and the following
are the 20 most common words.

```
and: 490 times
the: 435 times
to: 409 times
my: 371 times
of: 370 times
i: 343 times
in: 321 times
that: 320 times
thy: 281 times
thou: 234 times
with: 181 times
for: 171 times
is: 167 times
not: 167 times
me: 164 times
but: 163 times
a: 163 times
love: 162 times
thee: 160 times
so: 144 times
```

And some other words that appear are: warrantise, censures, oerpressd, and needst

I had to Google half of those words.

~ 19UV