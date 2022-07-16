import{ createRequire } from "module"             // these two lines are used
const require = createRequire(import.meta.url)    // 

import {franc} from "franc";
const langs = require('langs')
const langCode = franc('Alle menslike wesens word vry')
// console.log(franc('Alle menslike wesens word vry'));

const language = langs.where("3", langCode)
console.log(language.name)
