import { createRequire } from "module"             // these two lines are used
const require = createRequire(import.meta.url)    // 

import { franc } from "franc";
const colors = require("colors")
const langs = require('langs')
const input = process.argv[2]
const langCode = franc(input)

// console.log(franc('Alle menslike wesens word vry'));

if (langCode === 'und') {
    console.log("sorry, couldn't figure it out! try with another sample ".red)
} else {
    const language = langs.where("3", langCode)
    console.log(`the language is ${language.name}`.green)
}
