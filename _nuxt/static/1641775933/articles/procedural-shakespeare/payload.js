__NUXT_JSONP__("/articles/procedural-shakespeare", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{article:{slug:"procedural-shakespeare",description:"Making a program write Shakespeare to annoy my English teacher.",title:"Procedural Shakespeare",date:"01\u002F09\u002F2022",links:[{name:"Live Demo",path:n,same:o}],toc:[{id:p,depth:k,text:q},{id:r,depth:k,text:s},{id:t,depth:k,text:u},{id:v,depth:k,text:w},{id:x,depth:y,text:z},{id:A,depth:y,text:B}],body:{type:"root",children:[{type:b,tag:l,props:{id:p},children:[{type:b,tag:e,props:{href:"#a-short-story",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While binging Youtube, and procrastinating on doing German homework, I saw\nthe following video by one of the developers of "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.cavesofqud.com\u002F",rel:[C,D,E],target:F},children:[{type:a,value:"[Caves of Qud]"}]},{type:a,value:".\nHe discusses how they procedurally generate books (text) that look like\nEnglish, but have little to no meaning."}]},{type:a,value:c},{type:b,tag:G,props:{className:["video_wrapper"]},children:[{type:a,value:H},{type:b,tag:"iframe",props:{src:"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002F3AjlsTtrfVY",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:o},children:[{type:a,value:H}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What text also looks like English, but also has little to no meaning?\nExactly! Shakespeare!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So my project for the month is to generate Shakespeare-isk text using Markov\nchains, and hopefully get it to a point where it looks similar to actual Shakespeare."}]},{type:a,value:c},{type:b,tag:l,props:{id:r},children:[{type:b,tag:e,props:{href:"#step-1-a-bloated-dataset",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"History Lesson: Shakespeare wrote plays and poetry. Plays consisted of\nComedy (ex. All's Well That Ends Well), History (ex. Henry IV), and Tragedy\n(ex. Romeo and Juliet, Macbeth, and Hamlet). He also wrote poetry. For now,\nI'm just using Shakespeare's Sonnets "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.gutenberg.org\u002Febooks\u002F1041",rel:[C,D,E],target:F},children:[{type:a,value:"[on Project Gutenberg]"}]},{type:a,value:".\nIn the future, I may also add in his other poems (or add in his plays)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The final generator will not be able to generate full sonnets, because there are\nvarious restraints that I can't easily impliment (14 lines, 10 syllables per line,\niambic pentameter, etc). But it should be able to produce vaguely understandable\nenglish text (like William Shakespeare)."}]},{type:a,value:c},{type:b,tag:l,props:{id:t},children:[{type:b,tag:e,props:{href:"#step-2-a-sleep-deprived-rampage",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I used a method practically identical to that in the talk linked above. Going\nthrough every line in the poem, I found each 'phrase'. Every phrase is a number\n'n' number of words long (n=1 - 1 word, n=2 - 2 words). A shorter n (1) will\ncause it to be less likely to the text, and therefore more likely to have a\nunique result. A larger n, will make it less unique, but more likely to actually\nfollow some rules of grammar."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This took several hours."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But it works. The final result can be seen here: "},{type:b,tag:"nuxt-link",props:{to:n},children:[{type:a,value:"[Live Demo]"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The one major problem is that it sometimes generates existing quotes. This will\nhappen if it follows only existing links in the Markov chain."}]},{type:a,value:c},{type:b,tag:l,props:{id:v},children:[{type:b,tag:e,props:{href:"#extra-neat-stuff",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:I,props:{id:x},children:[{type:b,tag:e,props:{href:"#shakespeares-funnies-fake-words",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"\"Without all ornament, itself and true, have often liv’d alone,\""}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"\"To eat the world’s due, by the grave where buried love doth live,\""}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"\"So true a fool is love, that in thee are seen,\""}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"\"Yet what of thee thy poet doth invent,\""}]}]},{type:a,value:c},{type:b,tag:I,props:{id:A},children:[{type:b,tag:e,props:{href:"#shakespeares-most-common-words",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So I ran a frequency analysis on Shakespeare's sonnets, and the following\nare the 20 most common words."}]},{type:a,value:c},{type:b,tag:G,props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"and: 490 times\nthe: 435 times\nto: 409 times\nmy: 371 times\nof: 370 times\ni: 343 times\nin: 321 times\nthat: 320 times\nthy: 281 times\nthou: 234 times\nwith: 181 times\nfor: 171 times\nis: 167 times\nnot: 167 times\nme: 164 times\nbut: 163 times\na: 163 times\nlove: 162 times\nthee: 160 times\nso: 144 times\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And some other words that appear are: warrantise, censures, oerpressd, and needst"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I had to Google half of those words."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"~ 19UV"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fprocedural-shakespeare",extension:".md",createdAt:J,updatedAt:J}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","true",-1,"span","icon","icon-link",2,"h2","em","\u002Fshakespeare",true,"a-short-story","A Short Story","step-1-a-bloated-dataset","Step 1: A Bloated Dataset","step-2-a-sleep-deprived-rampage","Step 2: A Sleep Deprived Rampage","extra-neat-stuff","Extra: Neat Stuff","shakespeares-funnies-fake-words",3,"Shakespeare's Funnies Fake Words","shakespeares-most-common-words","Shakespeare's Most Common Words","nofollow","noopener","noreferrer","_blank","div","\n\t","h3","2022-01-10T00:51:20.077Z")));