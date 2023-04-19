const target = "A AA B BB Aa Bb AAA";

const regExp = /A{1,2}/g;
console.log(target.match(regExp)); //[ 'A', 'AA', 'A', 'AA', 'A' ]

const regExp2 = /A{2}/g;
console.log(target.match(regExp2)); //[ 'AA', 'AA' ]

const regExp3 = /A{2,}/g;

console.log(target.match(regExp3)); //[ 'AA', 'AAA' ]

const regExp4 = /A+/g;
console.log(target.match(regExp4)); //[ 'A', 'AA', 'A', 'AAA' ]

const target2 = "color colour";
const regExp5 = /colou?r/g;

console.log(target2.match(regExp5)); //[ 'color', 'colour' ]
